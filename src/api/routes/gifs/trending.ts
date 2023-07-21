

import { Router, Response, Request } from "express";
import fetch from "node-fetch";
import ProxyAgent from "proxy-agent";
import { route } from "@greektube/api";
import { Config } from "@greektube/util";
import { HTTPError } from "lambert-server";

const router = Router();

// TODO: Move somewhere else
enum TENOR_GIF_TYPES {
	gif,
	mediumgif,
	tinygif,
	nanogif,
	mp4,
	loopedmp4,
	tinymp4,
	nanomp4,
	webm,
	tinywebm,
	nanowebm,
}

type TENOR_MEDIA = {
	preview: string;
	url: string;
	dims: number[];
	size: number;
};

type TENOR_GIF = {
	created: number;
	hasaudio: boolean;
	id: string;
	media: { [type in keyof typeof TENOR_GIF_TYPES]: TENOR_MEDIA }[];
	tags: string[];
	title: string;
	itemurl: string;
	hascaption: boolean;
	url: string;
};

type TENOR_CATEGORY = {
	searchterm: string;
	path: string;
	image: string;
	name: string;
};

type TENOR_CATEGORIES_RESULTS = {
	tags: TENOR_CATEGORY[];
};

type TENOR_TRENDING_RESULTS = {
	next: string;
	results: TENOR_GIF[];
};

export function parseGifResult(result: TENOR_GIF) {
	return {
		id: result.id,
		title: result.title,
		url: result.itemurl,
		src: result.media[0].mp4.url,
		gif_src: result.media[0].gif.url,
		width: result.media[0].mp4.dims[0],
		height: result.media[0].mp4.dims[1],
		preview: result.media[0].mp4.preview,
	};
}

export function getGifApiKey() {
	const { enabled, provider, apiKey } = Config.get().gif;
	if (!enabled) throw new HTTPError(`Gifs are disabled`);
	if (provider !== "tenor" || !apiKey)
		throw new HTTPError(`${provider} gif provider not supported`);

	return apiKey;
}

router.get("/", route({}), async (req: Request, res: Response) => {
	// TODO: Custom providers
	// TODO: return gifs as mp4
	// const { media_format, locale } = req.query;
	const { locale } = req.query;

	const apiKey = getGifApiKey();

	const agent = new ProxyAgent();

	const [responseSource, trendGifSource] = await Promise.all([
		fetch(
			`https://g.tenor.com/v1/categories?locale=${locale}&key=${apiKey}`,
			{
				agent,
				method: "get",
				headers: { "Content-Type": "application/json" },
			},
		),
		fetch(
			`https://g.tenor.com/v1/trending?locale=${locale}&key=${apiKey}`,
			{
				agent,
				method: "get",
				headers: { "Content-Type": "application/json" },
			},
		),
	]);

	const { tags } = (await responseSource.json()) as TENOR_CATEGORIES_RESULTS;
	const { results } = (await trendGifSource.json()) as TENOR_TRENDING_RESULTS;

	res.json({
		categories: tags.map((x) => ({
			name: x.searchterm,
			src: x.image,
		})),
		gifs: [parseGifResult(results[0])],
	}).status(200);
});

export default router;
