"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isTextChannel = void 0;
const tslib_1 = require("tslib");
const express_1 = require("express");
const util_1 = require("@fosscord/util");
const lambert_server_1 = require("lambert-server");
const api_1 = require("@fosscord/api");
const multer_1 = tslib_1.__importDefault(require("multer"));
const typeorm_1 = require("typeorm");
const url_1 = require("url");
const router = (0, express_1.Router)();
exports.default = router;
function isTextChannel(type) {
    switch (type) {
        case util_1.ChannelType.GUILD_STORE:
        case util_1.ChannelType.GUILD_VOICE:
        case util_1.ChannelType.GUILD_STAGE_VOICE:
        case util_1.ChannelType.GUILD_CATEGORY:
        case util_1.ChannelType.GUILD_FORUM:
        case util_1.ChannelType.DIRECTORY:
            throw new lambert_server_1.HTTPError("not a text channel", 400);
        case util_1.ChannelType.DM:
        case util_1.ChannelType.GROUP_DM:
        case util_1.ChannelType.GUILD_NEWS:
        case util_1.ChannelType.GUILD_NEWS_THREAD:
        case util_1.ChannelType.GUILD_PUBLIC_THREAD:
        case util_1.ChannelType.GUILD_PRIVATE_THREAD:
        case util_1.ChannelType.GUILD_TEXT:
        case util_1.ChannelType.ENCRYPTED:
        case util_1.ChannelType.ENCRYPTED_THREAD:
            return true;
        default:
            throw new lambert_server_1.HTTPError("unimplemented", 400);
    }
}
exports.isTextChannel = isTextChannel;
// https://discord.com/developers/docs/resources/channel#create-message
// get messages
router.get("/", async (req, res) => {
    const channel_id = req.params.channel_id;
    const channel = await util_1.Channel.findOneOrFail({ where: { id: channel_id } });
    if (!channel)
        throw new lambert_server_1.HTTPError("Channel not found", 404);
    isTextChannel(channel.type);
    const around = req.query.around ? `${req.query.around}` : undefined;
    const before = req.query.before ? `${req.query.before}` : undefined;
    const after = req.query.after ? `${req.query.after}` : undefined;
    const limit = Number(req.query.limit) || 50;
    if (limit < 1 || limit > 100)
        throw new lambert_server_1.HTTPError("limit must be between 1 and 100", 422);
    const halfLimit = Math.floor(limit / 2);
    const permissions = await (0, util_1.getPermission)(req.user_id, channel.guild_id, channel_id);
    permissions.hasThrow("VIEW_CHANNEL");
    if (!permissions.has("READ_MESSAGE_HISTORY"))
        return res.json([]);
    const query = {
        order: { timestamp: "DESC" },
        take: limit,
        where: { channel_id },
        relations: [
            "author",
            "webhook",
            "application",
            "mentions",
            "mention_roles",
            "mention_channels",
            "sticker_items",
            "attachments",
        ],
    };
    if (after) {
        if (BigInt(after) > BigInt(util_1.Snowflake.generate()))
            return res.status(422);
        query.where.id = (0, typeorm_1.MoreThan)(after);
    }
    else if (before) {
        if (BigInt(before) < BigInt(req.params.channel_id))
            return res.status(422);
        query.where.id = (0, typeorm_1.LessThan)(before);
    }
    else if (around) {
        query.where.id = [
            (0, typeorm_1.MoreThan)((BigInt(around) - BigInt(halfLimit)).toString()),
            (0, typeorm_1.LessThan)((BigInt(around) + BigInt(halfLimit)).toString()),
        ];
        return res.json([]); // TODO: fix around
    }
    const messages = await util_1.Message.find(query);
    const endpoint = util_1.Config.get().cdn.endpointPublic;
    return res.json(messages.map((x) => {
        (x.reactions || []).forEach((y) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            if ((y.user_ids || []).includes(req.user_id))
                y.me = true;
            delete y.user_ids;
        });
        if (!x.author)
            x.author = util_1.User.create({
                id: "4",
                discriminator: "0000",
                username: "Fosscord Ghost",
                public_flags: 0,
            });
        x.attachments?.forEach((y) => {
            // dynamically set attachment proxy_url in case the endpoint changed
            const uri = y.proxy_url.startsWith("http")
                ? y.proxy_url
                : `https://example.org${y.proxy_url}`;
            y.proxy_url = `${endpoint == null ? "" : endpoint}${new url_1.URL(uri).pathname}`;
        });
        /**
        Some clients ( discord.js ) only check if a property exists within the response,
        which causes errors when, say, the `application` property is `null`.
        **/
        // for (var curr in x) {
        // 	if (x[curr] === null)
        // 		delete x[curr];
        // }
        return x;
    }));
});
// TODO: config max upload size
const messageUpload = (0, multer_1.default)({
    limits: {
        fileSize: util_1.Config.get().limits.message.maxAttachmentSize,
        fields: 10,
        // files: 1
    },
    storage: multer_1.default.memoryStorage(),
}); // max upload 50 mb
/**
 TODO: dynamically change limit of MessageCreateSchema with config

 https://discord.com/developers/docs/resources/channel#create-message
 TODO: text channel slowdown (per-user and across-users)
 Q: trim and replace message content and every embed field A: NO, given this cannot be implemented in E2EE channels
 TODO: only dispatch notifications for mentions denoted in allowed_mentions
**/
// Send message
router.post("/", messageUpload.any(), (req, res, next) => {
    if (req.body.payload_json) {
        req.body = JSON.parse(req.body.payload_json);
    }
    next();
}, (0, api_1.route)({
    body: "MessageCreateSchema",
    permission: "SEND_MESSAGES",
    right: "SEND_MESSAGES",
}), async (req, res) => {
    const { channel_id } = req.params;
    const body = req.body;
    const attachments = [];
    const channel = await util_1.Channel.findOneOrFail({
        where: { id: channel_id },
        relations: ["recipients", "recipients.user"],
    });
    if (!channel.isWritable()) {
        throw new lambert_server_1.HTTPError(`Cannot send messages to channel of type ${channel.type}`, 400);
    }
    if (body.nonce) {
        const existing = await util_1.Message.findOne({
            where: {
                nonce: body.nonce,
                channel_id: channel.id,
                author_id: req.user_id,
            },
        });
        if (existing) {
            return res.json(existing);
        }
    }
    if (!req.rights.has(util_1.Rights.FLAGS.BYPASS_RATE_LIMITS)) {
        const limits = util_1.Config.get().limits;
        if (limits.absoluteRate.register.enabled) {
            const count = await util_1.Message.count({
                where: {
                    channel_id,
                    timestamp: (0, typeorm_1.MoreThan)(new Date(Date.now() -
                        limits.absoluteRate.sendMessage.window)),
                },
            });
            if (count >= limits.absoluteRate.sendMessage.limit)
                throw (0, util_1.FieldErrors)({
                    channel_id: {
                        code: "TOO_MANY_MESSAGES",
                        message: req.t("common:toomany.MESSAGE"),
                    },
                });
        }
    }
    const files = req.files ?? [];
    for (const currFile of files) {
        try {
            const file = await (0, util_1.uploadFile)(`/attachments/${channel.id}`, currFile);
            attachments.push(util_1.Attachment.create({ ...file, proxy_url: file.url }));
        }
        catch (error) {
            return res.status(400).json({ message: error?.toString() });
        }
    }
    const embeds = body.embeds || [];
    if (body.embed)
        embeds.push(body.embed);
    const message = await (0, api_1.handleMessage)({
        ...body,
        type: 0,
        pinned: false,
        author_id: req.user_id,
        embeds,
        channel_id,
        attachments,
        edited_timestamp: undefined,
        timestamp: new Date(),
    });
    if (message.id == "0")
        return res.json(message); // Don't handle cancelled messages.
    channel.last_message_id = message.id;
    if (channel.isDm()) {
        const channel_dto = await util_1.DmChannelDTO.from(channel);
        // Only one recipients should be closed here, since in group DMs the recipient is deleted not closed
        await Promise.all(channel.recipients?.map((recipient) => {
            if (recipient.closed) {
                recipient.closed = false;
                return Promise.all([
                    recipient.save(),
                    (0, util_1.emitEvent)({
                        event: "CHANNEL_CREATE",
                        data: channel_dto.excludedRecipients([
                            recipient.user_id,
                        ]),
                        user_id: recipient.user_id,
                    }),
                ]);
            }
        }) || []);
    }
    if (message.guild_id) {
        // handleMessage will fetch the Member, but only if they are not guild owner.
        // have to fetch ourselves otherwise.
        if (!message.member) {
            message.member = await util_1.Member.findOneOrFail({
                where: { id: req.user_id, guild_id: message.guild_id },
                relations: ["roles"],
            });
        }
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        message.member.roles = message.member.roles
            .filter((x) => x.id != x.guild_id)
            .map((x) => x.id);
    }
    let read_state = await util_1.ReadState.findOne({
        where: { user_id: req.user_id, channel_id },
    });
    if (!read_state)
        read_state = util_1.ReadState.create({ user_id: req.user_id, channel_id });
    read_state.last_message_id = message.id;
    await Promise.all([
        read_state.save(),
        message.save(),
        (0, util_1.emitEvent)({
            event: "MESSAGE_CREATE",
            channel_id: channel_id,
            data: message,
        }),
        message.guild_id
            ? util_1.Member.update({ id: req.user_id, guild_id: message.guild_id }, { last_message_id: message.id })
            : null,
        channel.save(),
    ]);
    // no await as it shouldnt block the message send function and silently catch error
    (0, api_1.postHandleMessage)(message).catch((e) => console.error("[Message] post-message handler failed", e));
    return res.json(message);
});
//# sourceMappingURL=index.js.map