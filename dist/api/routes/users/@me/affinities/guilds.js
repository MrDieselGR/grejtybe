"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const api_1 = require("@greektube/api");
const router = (0, express_1.Router)();
router.get("/", (0, api_1.route)({}), (req, res) => {
    // TODO:
    res.status(200).send({ guild_affinities: [] });
});
exports.default = router;
//# sourceMappingURL=guilds.js.map