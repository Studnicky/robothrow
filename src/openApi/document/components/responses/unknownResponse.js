module.exports = {
	description: "Unknown Response",
	content: {
		"application/json": {
			schema: {
				type: "object",
				properties: {
					error: {
						$ref: "#/components/schemas/error",
					},
				},
			},
			example: {
				message: "Unknown Error",
			},
		},
	},
};
