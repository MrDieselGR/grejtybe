

import { Request, Response, Router } from "express";
import { route } from "@greektube/api";

const router: Router = Router();

router.get("/", route({}), async (req: Request, res: Response) => {
	res.json([]).status(200);
});

export default router;
