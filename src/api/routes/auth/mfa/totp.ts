

import { Router, Request, Response } from "express";
import { route } from "@greektube/api";
import { BackupCode, generateToken, User, TotpSchema } from "@greektube/util";
import { verifyToken } from "node-2fa";
import { HTTPError } from "lambert-server";
const router = Router();

router.post(
	"/",
	route({ body: "TotpSchema" }),
	async (req: Request, res: Response) => {
		// const { code, ticket, gift_code_sku_id, login_source } =
		const { code, ticket } = req.body as TotpSchema;

		const user = await User.findOneOrFail({
			where: {
				totp_last_ticket: ticket,
			},
			select: ["id", "totp_secret", "settings"],
		});

		const backup = await BackupCode.findOne({
			where: {
				code: code,
				expired: false,
				consumed: false,
				user: { id: user.id },
			},
		});

		if (!backup) {
			const ret = verifyToken(user.totp_secret || "", code);
			if (!ret || ret.delta != 0)
				throw new HTTPError(
					req.t("auth:login.INVALID_TOTP_CODE"),
					60008,
				);
		} else {
			backup.consumed = true;
			await backup.save();
		}

		await User.update({ id: user.id }, { totp_last_ticket: "" });

		return res.json({
			token: await generateToken(user.id),
			user_settings: user.settings,
		});
	},
);

export default router;
