

import { Router, Response, Request } from "express";
import {
	Channel,
	Member,
	OrmUtils,
	UserGuildSettingsSchema,
} from "@greektube/util";
import { route } from "@greektube/api";

const router = Router();

// GET doesn't exist on discord.com
router.get("/", route({}), async (req: Request, res: Response) => {
	const user = await Member.findOneOrFail({
		where: { id: req.user_id, guild_id: req.params.guild_id },
		select: ["settings"],
	});
	return res.json(user.settings);
});

router.patch(
	"/",
	route({ body: "UserGuildSettingsSchema" }),
	async (req: Request, res: Response) => {
		const body = req.body as UserGuildSettingsSchema;

		if (body.channel_overrides) {
			for (const channel in body.channel_overrides) {
				Channel.findOneOrFail({ where: { id: channel } });
			}
		}

		const user = await Member.findOneOrFail({
			where: { id: req.user_id, guild_id: req.params.guild_id },
			select: ["settings"],
		});
		OrmUtils.mergeDeep(user.settings || {}, body);
		Member.update({ id: req.user_id, guild_id: req.params.guild_id }, user);

		res.json(user.settings);
	},
);

export default router;
