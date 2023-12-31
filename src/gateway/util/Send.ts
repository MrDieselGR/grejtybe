

import { Payload, WebSocket } from "@greektube/gateway";
import fs from "fs/promises";
import path from "path";

import type { ErlpackType } from "@greektube/util";
let erlpack: ErlpackType | null = null;
try {
	erlpack = require("erlpack") as ErlpackType;
} catch (e) {
	// empty
}

export function Send(socket: WebSocket, data: Payload) {
	if (process.env.WS_VERBOSE)
		console.log(`[Websocket] Outgoing message: ${JSON.stringify(data)}`);

	if (process.env.WS_DUMP) {
		const id = socket.session_id || "unknown";

		(async () => {
			await fs.mkdir(path.join("dump", id), {
				recursive: true,
			});
			await fs.writeFile(
				path.join("dump", id, `${Date.now()}.out.json`),
				JSON.stringify(data, null, 2),
			);
		})();
	}

	let buffer: Buffer | string;
	if (socket.encoding === "etf" && erlpack) buffer = erlpack.pack(data);
	// TODO: encode circular object
	else if (socket.encoding === "json") buffer = JSON.stringify(data);
	else return;
	// TODO: compression
	if (socket.deflate) {
		buffer = socket.deflate.process(buffer) as Buffer;
	}

	return new Promise((res, rej) => {
		if (socket.readyState !== 1) {
			// return rej("socket not open");
			socket.close();
			return;
		}

		socket.send(buffer, (err) => {
			if (err) return rej(err);
			return res(null);
		});
	});
}
