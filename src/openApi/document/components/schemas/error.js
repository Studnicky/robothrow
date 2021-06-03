module.exports = {
	$schema: "http://json-schema.org/draft-07/schema#",
	$id: "/error",
	title: "Error Response",
	description: "API error response",
	type: "object",
	properties: {
		message: {
			type: "string",
		},
		code: {
			type: "string",
		},
		data: {
			oneOf: [
				{
					description: "List Not Found",
					type: "array",
					items: {
						items: {
							type: "Object",
							properties: {},
						},
					},
				},
				{
					description: "Object Not Found",
					type: "Object",
					properties: {},
				},
			],
		},
	},
};
