

import { Router, Response, Request } from "express";
import { route } from "@greektube/api";
import { getDatabase } from "@greektube/util";

const router = Router();

router.get("/", route({}), (req: Request, res: Response) => {
	if (!getDatabase()) return res.sendStatus(503);

	return res.sendStatus(200);
});

export default router;
