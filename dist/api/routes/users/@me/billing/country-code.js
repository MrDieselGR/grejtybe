"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const api_1 = require("@fosscord/api");
const router = (0, express_1.Router)();
router.get("/", (0, api_1.route)({}), async (req, res) => {
    //TODO
    res.json({ country_code: "US" }).status(200);
});
exports.default = router;
//# sourceMappingURL=country-code.js.map