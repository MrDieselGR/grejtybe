

import { Router, Response, Request } from "express";
import { route } from "@greektube/api";

const router = Router();

router.get("/", route({}), (req: Request, res: Response) => {
	// TODO:
	res.status(200).send({ guild_affinities: [] });
});

export default router;
