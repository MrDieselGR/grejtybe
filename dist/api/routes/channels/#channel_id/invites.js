"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const lambert_server_1 = require("lambert-server");
const api_1 = require("@greektube/api");
const api_2 = require("@greektube/api");
const util_1 = require("@greektube/util");
const messages_1 = require("./messages");
const router = (0, express_1.Router)();
router.post("/", (0, api_1.route)({
    body: "InviteCreateSchema",
    permission: "CREATE_INSTANT_INVITE",
    right: "CREATE_INVITES",
}), async (req, res) => {
    const { user_id } = req;
    const { channel_id } = req.params;
    const channel = await util_1.Channel.findOneOrFail({
        where: { id: channel_id },
        select: ["id", "name", "type", "guild_id"],
    });
    (0, messages_1.isTextChannel)(channel.type);
    if (!channel.guild_id) {
        throw new lambert_server_1.HTTPError("This channel doesn't exist", 404);
    }
    const { guild_id } = channel;
    const expires_at = new Date(req.body.max_age * 1000 + Date.now());
    const invite = await util_1.Invite.create({
        code: (0, api_2.random)(),
        temporary: req.body.temporary || true,
        uses: 0,
        max_uses: req.body.max_uses,
        max_age: req.body.max_age,
        expires_at,
        created_at: new Date(),
        guild_id,
        channel_id: channel_id,
        inviter_id: user_id,
    }).save();
    const data = invite.toJSON();
    data.inviter = await util_1.User.getPublicUser(req.user_id);
    data.guild = await util_1.Guild.findOne({ where: { id: guild_id } });
    data.channel = channel;
    await (0, util_1.emitEvent)({
        event: "INVITE_CREATE",
        data,
        guild_id,
    });
    res.status(201).send(data);
});
router.get("/", (0, api_1.route)({ permission: "MANAGE_CHANNELS" }), async (req, res) => {
    const { channel_id } = req.params;
    const channel = await util_1.Channel.findOneOrFail({
        where: { id: channel_id },
    });
    if (!channel.guild_id) {
        throw new lambert_server_1.HTTPError("This channel doesn't exist", 404);
    }
    const { guild_id } = channel;
    const invites = await util_1.Invite.find({
        where: { guild_id },
        relations: util_1.PublicInviteRelation,
    });
    res.status(200).send(invites);
});
exports.default = router;
//# sourceMappingURL=invites.js.map