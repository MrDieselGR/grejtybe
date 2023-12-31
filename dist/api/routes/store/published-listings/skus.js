"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const api_1 = require("@greektube/api");
const router = (0, express_1.Router)();
router.get("/:id", (0, api_1.route)({}), async (req, res) => {
    //TODO
    // const id = req.params.id;
    res.json({
        id: "",
        summary: "",
        sku: {
            id: "",
            type: 1,
            dependent_sku_id: null,
            application_id: "",
            manifets_labels: [],
            access_type: 2,
            name: "",
            features: [],
            release_date: "",
            premium: false,
            slug: "",
            flags: 4,
            genres: [],
            legal_notice: "",
            application: {
                id: "",
                name: "",
                icon: "",
                description: "",
                summary: "",
                cover_image: "",
                primary_sku_id: "",
                hook: true,
                slug: "",
                guild_id: "",
                bot_public: "",
                bot_require_code_grant: false,
                verify_key: "",
                publishers: [
                    {
                        id: "",
                        name: "",
                    },
                ],
                developers: [
                    {
                        id: "",
                        name: "",
                    },
                ],
                system_requirements: {},
                show_age_gate: false,
                price: {
                    amount: 0,
                    currency: "EUR",
                },
                locales: [],
            },
            tagline: "",
            description: "",
            carousel_items: [
                {
                    asset_id: "",
                },
            ],
            header_logo_dark_theme: {},
            header_logo_light_theme: {},
            box_art: {},
            thumbnail: {},
            header_background: {},
            hero_background: {},
            assets: [],
        },
    }).status(200);
});
exports.default = router;
//# sourceMappingURL=skus.js.map