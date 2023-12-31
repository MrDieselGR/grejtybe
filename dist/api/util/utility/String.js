"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCode = exports.checkLength = void 0;
const Base64_1 = require("./Base64");
const util_1 = require("@greektube/util");
function checkLength(str, min, max, key, req) {
    if (str.length < min || str.length > max) {
        throw (0, util_1.FieldErrors)({
            [key]: {
                code: "BASE_TYPE_BAD_LENGTH",
                message: req.t("common:field.BASE_TYPE_BAD_LENGTH", {
                    length: `${min} - ${max}`,
                }),
            },
        });
    }
}
exports.checkLength = checkLength;
function generateCode() {
    return (0, Base64_1.ntob)(Date.now() + Math.randomIntBetween(0, 10000));
}
exports.generateCode = generateCode;
//# sourceMappingURL=String.js.map