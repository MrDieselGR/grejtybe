"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const api_1 = require("@fosscord/api");
const router = (0, express_1.Router)();
//TODO: implement webhooks
router.get("/", (0, api_1.route)({}), async (req, res) => {
    res.json([]);
});
exports.default = router;
//# sourceMappingURL=webhooks.js.map