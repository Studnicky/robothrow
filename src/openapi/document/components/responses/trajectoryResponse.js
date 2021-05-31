// https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#responseObject

const examples = require("../examples/initialState");

module.exports = {
	description: "Get Trajectory",
	content: {
		"application/json": {
			schema: {
				type: "object",
				properties: {
					data: {
						$ref: "#/components/schemas/trajectory",
					},
				},
			},
			examples: Object.entries(examples).reduce(
				(examplesObject, [exampleName, exampleObject]) => {
					examplesObject[exampleName] = {
						summary: exampleObject.summary,
						value: {
							data: exampleObject.value,
						},
					};
					return examplesObject;
				},
				{},
			),
		},
	},
};
