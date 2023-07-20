"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/* eslint-disable @typescript-eslint/no-explicit-any */
const express_1 = require("express");
const util_1 = require("@fosscord/util");
const lambert_server_1 = require("lambert-server");
const api_1 = require("@fosscord/api");
const fs_1 = tslib_1.__importDefault(require("fs"));
const path_1 = tslib_1.__importDefault(require("path"));
const router = (0, express_1.Router)();
// TODO: use svg templates instead of node-canvas for improved performance and to change it easily
// https://discord.com/developers/docs/resources/guild#get-guild-widget-image
// TODO: Cache the response
router.get("/", (0, api_1.route)({}), async (req, res) => {
    const { guild_id } = req.params;
    const guild = await util_1.Guild.findOneOrFail({ where: { id: guild_id } });
    if (!guild.widget_enabled)
        throw new lambert_server_1.HTTPError("Unknown Guild", 404);
    // Fetch guild information
    const icon = guild.icon;
    const name = guild.name;
    const presence = guild.presence_count + " ONLINE";
    // Fetch parameter
    const style = req.query.style?.toString() || "shield";
    if (!["shield", "banner1", "banner2", "banner3", "banner4"].includes(style)) {
        throw new lambert_server_1.HTTPError("Value must be one of ('shield', 'banner1', 'banner2', 'banner3', 'banner4').", 400);
    }
    // Setup canvas
    const { createCanvas } = require("canvas");
    const { loadImage } = require("canvas");
    const sizeOf = require("image-size");
    // TODO: Widget style templates need Fosscord branding
    const source = path_1.default.join(__dirname, "..", "..", "..", "..", "..", "assets", "widget", `${style}.png`);
    if (!fs_1.default.existsSync(source)) {
        throw new lambert_server_1.HTTPError("Widget template does not exist.", 400);
    }
    // Create base template image for parameter
    const { width, height } = await sizeOf(source);
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext("2d");
    const template = await loadImage(source);
    ctx.drawImage(template, 0, 0);
    // Add the guild specific information to the template asset image
    switch (style) {
        case "shield":
            ctx.textAlign = "center";
            await drawText(ctx, 73, 13, "#FFFFFF", "thin 10px Verdana", presence);
            break;
        case "banner1":
            if (icon)
                await drawIcon(ctx, 20, 27, 50, icon);
            await drawText(ctx, 83, 51, "#FFFFFF", "12px Verdana", name, 22);
            await drawText(ctx, 83, 66, "#C9D2F0FF", "thin 11px Verdana", presence);
            break;
        case "banner2":
            if (icon)
                await drawIcon(ctx, 13, 19, 36, icon);
            await drawText(ctx, 62, 34, "#FFFFFF", "12px Verdana", name, 15);
            await drawText(ctx, 62, 49, "#C9D2F0FF", "thin 11px Verdana", presence);
            break;
        case "banner3":
            if (icon)
                await drawIcon(ctx, 20, 20, 50, icon);
            await drawText(ctx, 83, 44, "#FFFFFF", "12px Verdana", name, 27);
            await drawText(ctx, 83, 58, "#C9D2F0FF", "thin 11px Verdana", presence);
            break;
        case "banner4":
            if (icon)
                await drawIcon(ctx, 21, 136, 50, icon);
            await drawText(ctx, 84, 156, "#FFFFFF", "13px Verdana", name, 27);
            await drawText(ctx, 84, 171, "#C9D2F0FF", "thin 12px Verdana", presence);
            break;
        default:
            throw new lambert_server_1.HTTPError("Value must be one of ('shield', 'banner1', 'banner2', 'banner3', 'banner4').", 400);
    }
    // Return final image
    const buffer = canvas.toBuffer("image/png");
    res.set("Content-Type", "image/png");
    res.set("Cache-Control", "public, max-age=3600");
    return res.send(buffer);
});
async function drawIcon(canvas, x, y, scale, icon) {
    const img = new (require("canvas").Image)();
    img.src = icon;
    // Do some canvas clipping magic!
    canvas.save();
    canvas.beginPath();
    const r = scale / 2; // use scale to determine radius
    canvas.arc(x + r, y + r, r, 0, 2 * Math.PI, false); // start circle at x, and y coords + radius to find center
    canvas.clip();
    canvas.drawImage(img, x, y, scale, scale);
    canvas.restore();
}
async function drawText(canvas, x, y, color, font, text, maxcharacters) {
    canvas.fillStyle = color;
    canvas.font = font;
    if (text.length > (maxcharacters || 0) && maxcharacters)
        text = text.slice(0, maxcharacters) + "...";
    canvas.fillText(text, x, y);
}
exports.default = router;
//# sourceMappingURL=widget.png.js.map