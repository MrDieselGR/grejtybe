

import { Router, Request, Response } from "express";
import { route } from "@greektube/api";
const router = Router();

router.get("/subscriptions", route({}), async (req: Request, res: Response) => {
	// TODO:
	res.json([]);
});

export default router;
