

import { Router, Response, Request } from "express";
import { route } from "@greektube/api";

const router = Router();

router.post("/", route({}), (req: Request, res: Response) => {
	// TODO:
	res.sendStatus(204);
});

export default router;
