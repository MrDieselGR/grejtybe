

import { Guild, Config } from "@greektube/util";

import { Router, Request, Response } from "express";
import { route } from "@greektube/api";
import { Like } from "typeorm";

const router = Router();

router.get("/", route({}), async (req: Request, res: Response) => {
	const { offset, limit, categories } = req.query;
	const showAllGuilds = Config.get().guild.discovery.showAllGuilds;
	const configLimit = Config.get().guild.discovery.limit;
	let guilds;
	if (categories == undefined) {
		guilds = showAllGuilds
			? await Guild.find({ take: Math.abs(Number(limit || configLimit)) })
			: await Guild.find({
					where: { features: Like(`%DISCOVERABLE%`) },
					take: Math.abs(Number(limit || configLimit)),
			  });
	} else {
		guilds = showAllGuilds
			? await Guild.find({
					where: { primary_category_id: categories.toString() },
					take: Math.abs(Number(limit || configLimit)),
			  })
			: await Guild.find({
					where: {
						primary_category_id: categories.toString(),
						features: Like("%DISCOVERABLE%"),
					},
					take: Math.abs(Number(limit || configLimit)),
			  });
	}

	const total = guilds ? guilds.length : undefined;

	res.send({
		total: total,
		guilds: guilds,
		offset: Number(offset || Config.get().guild.discovery.offset),
		limit: Number(limit || configLimit),
	});
});

export default router;
