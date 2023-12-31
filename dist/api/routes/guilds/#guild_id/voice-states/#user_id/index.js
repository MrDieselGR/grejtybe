"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("@greektube/util");
const api_1 = require("@greektube/api");
const express_1 = require("express");
const router = (0, express_1.Router)();
//TODO need more testing when community guild and voice stage channel are working
router.patch("/", (0, api_1.route)({ body: "VoiceStateUpdateSchema" }), async (req, res) => {
    const body = req.body;
    const { guild_id } = req.params;
    const user_id = req.params.user_id === "@me" ? req.user_id : req.params.user_id;
    const perms = await (0, util_1.getPermission)(req.user_id, guild_id, body.channel_id);
    /*
From https://discord.com/developers/docs/resources/guild#modify-current-user-voice-state
You must have the MUTE_MEMBERS permission to unsuppress others. You can always suppress yourself.
You must have the REQUEST_TO_SPEAK permission to request to speak. You can always clear your own request to speak.
 */
    if (body.suppress && user_id !== req.user_id) {
        perms.hasThrow("MUTE_MEMBERS");
    }
    if (!body.suppress)
        body.request_to_speak_timestamp = new Date();
    if (body.request_to_speak_timestamp)
        perms.hasThrow("REQUEST_TO_SPEAK");
    const voice_state = await util_1.VoiceState.findOne({
        where: {
            guild_id,
            channel_id: body.channel_id,
            user_id,
        },
    });
    if (!voice_state)
        throw util_1.DiscordApiErrors.UNKNOWN_VOICE_STATE;
    voice_state.assign(body);
    const channel = await util_1.Channel.findOneOrFail({
        where: { guild_id, id: body.channel_id },
    });
    if (channel.type !== util_1.ChannelType.GUILD_STAGE_VOICE) {
        throw util_1.DiscordApiErrors.CANNOT_EXECUTE_ON_THIS_CHANNEL_TYPE;
    }
    await Promise.all([
        voice_state.save(),
        (0, util_1.emitEvent)({
            event: "VOICE_STATE_UPDATE",
            data: voice_state,
            guild_id,
        }),
    ]);
    return res.sendStatus(204);
});
exports.default = router;
//# sourceMappingURL=index.js.map