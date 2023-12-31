

import { Invite, PublicInviteRelation } from "@greektube/util";
import { route } from "@greektube/api";
import { Request, Response, Router } from "express";

const router = Router();

router.get(
	"/",
	route({ permission: "MANAGE_GUILD" }),
	async (req: Request, res: Response) => {
		const { guild_id } = req.params;

		const invites = await Invite.find({
			where: { guild_id },
			relations: PublicInviteRelation,
		});

		return res.json(invites);
	},
);

export default router;
