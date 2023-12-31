

require("module-alias/register");
process.on("uncaughtException", console.error);
process.on("unhandledRejection", console.error);

import "missing-native-js-functions";
import { config } from "dotenv";
config();
import { FosscordServer } from "./Server";
import cluster from "cluster";
import os from "os";
let cores = 1;
try {
	cores = Number(process.env.THREADS) || os.cpus().length;
} catch {
	console.log("[API] Failed to get thread count! Using 1...");
}

if (cluster.isPrimary && process.env.NODE_ENV == "production") {
	console.log(`Primary ${process.pid} is running`);

	// Fork workers.
	for (let i = 0; i < cores; i++) {
		cluster.fork();
	}

	cluster.on("exit", (worker) => {
		console.log(`worker ${worker.process.pid} died, restart worker`);
		cluster.fork();
	});
} else {
	const port = Number(process.env.PORT) || 3001;

	const server = new FosscordServer({ port });
	server.start().catch(console.error);

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	global.server = server;
}
