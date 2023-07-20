

require("module-alias/register");
const getRouteDescriptions = require("./util/getRouteDescriptions");
const path = require("path");
const fs = require("fs");
const {
	NO_AUTHORIZATION_ROUTES,
} = require("../dist/api/middlewares/Authentication");
require("missing-native-js-functions");

const openapiPath = path.join(__dirname, "..", "assets", "openapi.json");
const SchemaPath = path.join(__dirname, "..", "assets", "schemas.json");
const schemas = JSON.parse(fs.readFileSync(SchemaPath, { encoding: "utf8" }));
const specification = JSON.parse(
	fs.readFileSync(openapiPath, { encoding: "utf8" }),
);

function combineSchemas(schemas) {
	var definitions = {};

	for (const name in schemas) {
		definitions = {
			...definitions,
			...schemas[name].definitions,
			[name]: {
				...schemas[name],
				definitions: undefined,
				$schema: undefined,
			},
		};
	}

	for (const key in definitions) {
		specification.components = specification.components || {};
		specification.components.schemas =
			specification.components.schemas || {};
		specification.components.schemas[key] = definitions[key];
		delete definitions[key].additionalProperties;
		delete definitions[key].$schema;
		const definition = definitions[key];

		if (typeof definition.properties === "object") {
			for (const property of Object.values(definition.properties)) {
				if (Array.isArray(property.type)) {
					if (property.type.includes("null")) {
						property.type = property.type.find((x) => x !== "null");
						property.nullable = true;
					}
				}
			}
		}
	}

	return definitions;
}

function getTag(key) {
	return key.match(/\/([\w-]+)/)[1];
}

function apiRoutes() {
	const routes = getRouteDescriptions();

	const tags = Array.from(routes.keys()).map((x) => getTag(x));
	specification.tags = specification.tags || [];
	specification.tags = [...specification.tags.map((x) => x.name), ...tags]
		.unique()
		.map((x) => ({ name: x }));

	specification.components = specification.components || {};
	specification.components.securitySchemes = {
		bearer: {
			type: "http",
			scheme: "bearer",
			description: "Bearer/Bot prefixes are not required.",
		},
	};

	routes.forEach((route, pathAndMethod) => {
		const [p, method] = pathAndMethod.split("|");
		const path = p.replace(/:(\w+)/g, "{$1}");

		specification.paths = specification.paths || {};
		let obj = specification.paths[path]?.[method] || {};
		obj["x-right-required"] = route.right;
		obj["x-permission-required"] = route.permission;
		obj["x-fires-event"] = route.test?.event;

		if (
			!NO_AUTHORIZATION_ROUTES.some((x) => {
				if (typeof x === "string") return path.startsWith(x);
				return x.test(path);
			})
		) {
			obj.security = [{ bearer: true }];
		}

		if (route.body) {
			obj.requestBody = {
				required: true,
				content: {
					"application/json": {
						schema: { $ref: `#/components/schemas/${route.body}` },
					},
				},
			}.merge(obj.requestBody);
		}

		if (route.test?.response) {
			const status = route.test.response.status || 200;
			let schema = {
				allOf: [
					{
						$ref: `#/components/schemas/${route.test.response.body}`,
					},
					{
						example: route.test.body,
					},
				],
			};
			if (!route.test.body) schema = schema.allOf[0];

			obj.responses = {
				[status]: {
					...(route.test.response.body
						? {
								description:
									obj?.responses?.[status]?.description || "",
								content: {
									"application/json": {
										schema: schema,
									},
								},
						  }
						: {}),
				},
			}.merge(obj.responses);
			delete obj.responses.default;
		}
		if (p.includes(":")) {
			obj.parameters = p.match(/:\w+/g)?.map((x) => ({
				name: x.replace(":", ""),
				in: "path",
				required: true,
				schema: { type: "string" },
				description: x.replace(":", ""),
			}));
		}
		obj.tags = [...(obj.tags || []), getTag(p)].unique();

		specification.paths[path] = {
			...specification.paths[path],
			[method]: obj,
		};
	});
}

function main() {
	combineSchemas(schemas);
	apiRoutes();

	fs.writeFileSync(
		openapiPath,
		JSON.stringify(specification, null, 4)
			.replaceAll("#/definitions", "#/components/schemas")
			.replaceAll("bigint", "number"),
	);
}

main();
