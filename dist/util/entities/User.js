"use strict";
var User_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFlags = exports.CUSTOM_USER_FLAG_OFFSET = exports.User = exports.PrivateUserProjection = exports.PublicUserProjection = exports.PrivateUserEnum = exports.PublicUserEnum = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const BaseClass_1 = require("./BaseClass");
const BitField_1 = require("../util/BitField");
const Relationship_1 = require("./Relationship");
const ConnectedAccount_1 = require("./ConnectedAccount");
const Member_1 = require("./Member");
const UserSettings_1 = require("./UserSettings");
const Session_1 = require("./Session");
const __1 = require("..");
const SecurityKey_1 = require("./SecurityKey");
var PublicUserEnum;
(function (PublicUserEnum) {
    PublicUserEnum[PublicUserEnum["username"] = 0] = "username";
    PublicUserEnum[PublicUserEnum["discriminator"] = 1] = "discriminator";
    PublicUserEnum[PublicUserEnum["id"] = 2] = "id";
    PublicUserEnum[PublicUserEnum["public_flags"] = 3] = "public_flags";
    PublicUserEnum[PublicUserEnum["avatar"] = 4] = "avatar";
    PublicUserEnum[PublicUserEnum["accent_color"] = 5] = "accent_color";
    PublicUserEnum[PublicUserEnum["banner"] = 6] = "banner";
    PublicUserEnum[PublicUserEnum["bio"] = 7] = "bio";
    PublicUserEnum[PublicUserEnum["bot"] = 8] = "bot";
    PublicUserEnum[PublicUserEnum["premium_since"] = 9] = "premium_since";
    PublicUserEnum[PublicUserEnum["premium_type"] = 10] = "premium_type";
    PublicUserEnum[PublicUserEnum["theme_colors"] = 11] = "theme_colors";
    PublicUserEnum[PublicUserEnum["pronouns"] = 12] = "pronouns";
})(PublicUserEnum = exports.PublicUserEnum || (exports.PublicUserEnum = {}));
var PrivateUserEnum;
(function (PrivateUserEnum) {
    PrivateUserEnum[PrivateUserEnum["flags"] = 0] = "flags";
    PrivateUserEnum[PrivateUserEnum["mfa_enabled"] = 1] = "mfa_enabled";
    PrivateUserEnum[PrivateUserEnum["email"] = 2] = "email";
    PrivateUserEnum[PrivateUserEnum["phone"] = 3] = "phone";
    PrivateUserEnum[PrivateUserEnum["verified"] = 4] = "verified";
    PrivateUserEnum[PrivateUserEnum["nsfw_allowed"] = 5] = "nsfw_allowed";
    PrivateUserEnum[PrivateUserEnum["premium"] = 6] = "premium";
    PrivateUserEnum[PrivateUserEnum["premium_type"] = 7] = "premium_type";
    PrivateUserEnum[PrivateUserEnum["purchased_flags"] = 8] = "purchased_flags";
    PrivateUserEnum[PrivateUserEnum["premium_usage_flags"] = 9] = "premium_usage_flags";
    PrivateUserEnum[PrivateUserEnum["disabled"] = 10] = "disabled";
    // settings,	// now a relation
    // locale
})(PrivateUserEnum = exports.PrivateUserEnum || (exports.PrivateUserEnum = {}));
exports.PublicUserProjection = Object.values(PublicUserEnum).filter((x) => typeof x === "string");
exports.PrivateUserProjection = [
    ...exports.PublicUserProjection,
    ...Object.values(PrivateUserEnum).filter((x) => typeof x === "string"),
];
let User = User_1 = class User extends BaseClass_1.BaseClass {
    username; // username max length 32, min 2 (should be configurable)
    discriminator; // opaque string: 4 digits on discord.com
    avatar; // hash of the user avatar
    accent_color; // banner color of user
    banner; // hash of the user banner
    theme_colors; // TODO: Separate `User` and `UserProfile` models
    pronouns;
    phone; // phone number of the user
    desktop = false; // if the user has desktop app installed
    mobile = false; // if the user has mobile app installed
    premium = __1.Config.get().defaults.user.premium ?? false; // if user bought individual premium
    premium_type = __1.Config.get().defaults.user.premiumType ?? 0; // individual premium level
    bot = false; // if user is bot
    bio = ""; // short description of the user (max 190 chars -> should be configurable)
    system = false; // shouldn't be used, the api sends this field type true, if the generated message comes from a system generated author
    nsfw_allowed = true; // if the user can do age-restricted actions (NSFW channels/guilds/commands) // TODO: depending on age
    mfa_enabled = false; // if multi factor authentication is enabled
    webauthn_enabled = false; // if webauthn multi factor authentication is enabled
    totp_secret = "";
    totp_last_ticket = "";
    created_at = new Date(); // registration date
    premium_since; // premium date
    verified = __1.Config.get().defaults.user.verified ?? true; // email is verified
    disabled = false; // if the account is disabled
    deleted = false; // if the user was deleted
    email; // email of the user
    flags = "0"; // UserFlags // TODO: generate
    public_flags = 0;
    purchased_flags = 0;
    premium_usage_flags = 0;
    rights;
    sessions;
    relationships;
    connected_accounts;
    data;
    fingerprints = []; // array of fingerprints -> used to prevent multiple accounts
    settings;
    // workaround to prevent fossord-unaware clients from deleting settings not used by them
    extended_settings = "{}";
    security_keys;
    // TODO: I don't like this method?
    validate() {
        if (this.email) {
            this.email = (0, __1.adjustEmail)(this.email);
            if (!this.email)
                throw (0, __1.FieldErrors)({
                    email: { message: "Invalid email", code: "EMAIL_INVALID" },
                });
            if (!this.email.match(/([a-z\d.-]{3,})@([a-z\d.-]+).([a-z]{2,})/g))
                throw (0, __1.FieldErrors)({
                    email: { message: "Invalid email", code: "EMAIL_INVALID" },
                });
        }
        if (this.discriminator) {
            const discrim = Number(this.discriminator);
            if (isNaN(discrim) ||
                !(typeof discrim == "number") ||
                !Number.isInteger(discrim) ||
                discrim <= 0 ||
                discrim >= 10000)
                throw (0, __1.FieldErrors)({
                    discriminator: {
                        message: "Discriminator must be a number.",
                        code: "DISCRIMINATOR_INVALID",
                    },
                });
            this.discriminator = discrim.toString().padStart(4, "0");
        }
    }
    toPublicUser() {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const user = {};
        exports.PublicUserProjection.forEach((x) => {
            user[x] = this[x];
        });
        return user;
    }
    static async getPublicUser(user_id, opts) {
        return await User_1.findOneOrFail({
            where: { id: user_id },
            ...opts,
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            select: [...exports.PublicUserProjection, ...(opts?.select || [])], // TODO: fix
        });
    }
    static async generateDiscriminator(username) {
        if (__1.Config.get().register.incrementingDiscriminators) {
            // discriminator will be incrementally generated
            // First we need to figure out the currently highest discrimnator for the given username and then increment it
            const users = await User_1.find({
                where: { username },
                select: ["discriminator"],
            });
            const highestDiscriminator = Math.max(0, ...users.map((u) => Number(u.discriminator)));
            const discriminator = highestDiscriminator + 1;
            if (discriminator >= 10000) {
                return undefined;
            }
            return discriminator.toString().padStart(4, "0");
        }
        else {
            // discriminator will be randomly generated
            // randomly generates a discriminator between 1 and 9999 and checks max five times if it already exists
            // TODO: is there any better way to generate a random discriminator only once, without checking if it already exists in the database?
            for (let tries = 0; tries < 5; tries++) {
                const discriminator = Math.randomIntBetween(1, 9999)
                    .toString()
                    .padStart(4, "0");
                const exists = await User_1.findOne({
                    where: { discriminator, username: username },
                    select: ["id"],
                });
                if (!exists)
                    return discriminator;
            }
            return undefined;
        }
    }
    static async register({ email, username, password, id, req, }) {
        // trim special uf8 control characters -> Backspace, Newline, ...
        username = (0, __1.trimSpecial)(username);
        const discriminator = await User_1.generateDiscriminator(username);
        if (!discriminator) {
            // We've failed to generate a valid and unused discriminator
            throw (0, __1.FieldErrors)({
                username: {
                    code: "USERNAME_TOO_MANY_USERS",
                    message: req?.t("auth:register.USERNAME_TOO_MANY_USERS") || "",
                },
            });
        }
        // TODO: save date_of_birth
        // appearently discord doesn't save the date of birth and just calculate if nsfw is allowed
        // if nsfw_allowed is null/undefined it'll require date_of_birth to set it to true/false
        const language = req?.language === "en" ? "en-US" : req?.language || "en-US";
        const settings = UserSettings_1.UserSettings.create({
            locale: language,
        });
        const user = User_1.create({
            username: username,
            discriminator,
            id: id || __1.Snowflake.generate(),
            email: email,
            data: {
                hash: password,
                valid_tokens_since: new Date(),
            },
            extended_settings: "{}",
            premium_since: __1.Config.get().defaults.user.premium
                ? new Date()
                : undefined,
            settings: settings,
            rights: __1.Config.get().register.defaultRights,
        });
        user.validate();
        await Promise.all([user.save(), settings.save()]);
        setImmediate(async () => {
            if (__1.Config.get().guild.autoJoin.enabled) {
                for (const guild of __1.Config.get().guild.autoJoin.guilds || []) {
                    await Member_1.Member.addToGuild(user.id, guild).catch((e) => console.error("[Autojoin]", e));
                }
            }
        });
        return user;
    }
};
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "username", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "discriminator", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "avatar", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "accent_color", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "banner", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: "simple-array" }),
    tslib_1.__metadata("design:type", Array)
], User.prototype, "theme_colors", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "pronouns", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true, select: false }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "phone", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ select: false }),
    tslib_1.__metadata("design:type", Boolean)
], User.prototype, "desktop", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ select: false }),
    tslib_1.__metadata("design:type", Boolean)
], User.prototype, "mobile", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Boolean)
], User.prototype, "premium", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "premium_type", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Boolean)
], User.prototype, "bot", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "bio", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Boolean)
], User.prototype, "system", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ select: false }),
    tslib_1.__metadata("design:type", Boolean)
], User.prototype, "nsfw_allowed", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ select: false }),
    tslib_1.__metadata("design:type", Boolean)
], User.prototype, "mfa_enabled", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ select: false, default: false }),
    tslib_1.__metadata("design:type", Boolean)
], User.prototype, "webauthn_enabled", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ select: false, nullable: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "totp_secret", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true, select: false }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "totp_last_ticket", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Date)
], User.prototype, "created_at", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Date)
], User.prototype, "premium_since", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ select: false }),
    tslib_1.__metadata("design:type", Boolean)
], User.prototype, "verified", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Boolean)
], User.prototype, "disabled", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Boolean)
], User.prototype, "deleted", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true, select: false }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "email", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "flags", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "public_flags", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "purchased_flags", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "premium_usage_flags", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "bigint" }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "rights", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => Session_1.Session, (session) => session.user),
    tslib_1.__metadata("design:type", Array)
], User.prototype, "sessions", void 0);
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "relationship_ids" }),
    (0, typeorm_1.OneToMany)(() => Relationship_1.Relationship, (relationship) => relationship.from, {
        cascade: true,
        orphanedRowAction: "delete",
    }),
    tslib_1.__metadata("design:type", Array)
], User.prototype, "relationships", void 0);
tslib_1.__decorate([
    (0, typeorm_1.JoinColumn)({ name: "connected_account_ids" }),
    (0, typeorm_1.OneToMany)(() => ConnectedAccount_1.ConnectedAccount, (account) => account.user, {
        cascade: true,
        orphanedRowAction: "delete",
    }),
    tslib_1.__metadata("design:type", Array)
], User.prototype, "connected_accounts", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "simple-json", select: false }),
    tslib_1.__metadata("design:type", Object)
], User.prototype, "data", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "simple-array", select: false }),
    tslib_1.__metadata("design:type", Array)
], User.prototype, "fingerprints", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToOne)(() => UserSettings_1.UserSettings, {
        cascade: true,
        orphanedRowAction: "delete",
        eager: false,
    }),
    (0, typeorm_1.JoinColumn)(),
    tslib_1.__metadata("design:type", UserSettings_1.UserSettings)
], User.prototype, "settings", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "simple-json", select: false }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "extended_settings", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => SecurityKey_1.SecurityKey, (key) => key.user),
    tslib_1.__metadata("design:type", Array)
], User.prototype, "security_keys", void 0);
User = User_1 = tslib_1.__decorate([
    (0, typeorm_1.Entity)("users")
], User);
exports.User = User;
exports.CUSTOM_USER_FLAG_OFFSET = BigInt(1) << BigInt(32);
class UserFlags extends BitField_1.BitField {
    static FLAGS = {
        DISCORD_EMPLOYEE: BigInt(1) << BigInt(0),
        PARTNERED_SERVER_OWNER: BigInt(1) << BigInt(1),
        HYPESQUAD_EVENTS: BigInt(1) << BigInt(2),
        BUGHUNTER_LEVEL_1: BigInt(1) << BigInt(3),
        MFA_SMS: BigInt(1) << BigInt(4),
        PREMIUM_PROMO_DISMISSED: BigInt(1) << BigInt(5),
        HOUSE_BRAVERY: BigInt(1) << BigInt(6),
        HOUSE_BRILLIANCE: BigInt(1) << BigInt(7),
        HOUSE_BALANCE: BigInt(1) << BigInt(8),
        EARLY_SUPPORTER: BigInt(1) << BigInt(9),
        TEAM_USER: BigInt(1) << BigInt(10),
        TRUST_AND_SAFETY: BigInt(1) << BigInt(11),
        SYSTEM: BigInt(1) << BigInt(12),
        HAS_UNREAD_URGENT_MESSAGES: BigInt(1) << BigInt(13),
        BUGHUNTER_LEVEL_2: BigInt(1) << BigInt(14),
        UNDERAGE_DELETED: BigInt(1) << BigInt(15),
        VERIFIED_BOT: BigInt(1) << BigInt(16),
        EARLY_VERIFIED_BOT_DEVELOPER: BigInt(1) << BigInt(17),
        CERTIFIED_MODERATOR: BigInt(1) << BigInt(18),
        BOT_HTTP_INTERACTIONS: BigInt(1) << BigInt(19),
    };
}
exports.UserFlags = UserFlags;
//# sourceMappingURL=User.js.map