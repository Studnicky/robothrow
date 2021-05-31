module.exports = {
	$schema: "http://json-schema.org/draft-07/schema#",
	$id: "/trajectory",
	title: "Trajectory",
	type: "object",
	properties: {
		angle: {
			type: "number",
			description: "Release Angle",
		},
		velocity: {
			oneOf: [
				{
					type: "string",
				},
				{
					type: "null",
				},
			],
			description: "Release Velocity",
		},
		createdAt: {
			oneOf: [
				{
					type: "string",
				},
				{
					type: "null",
				},
			],
			format: "date-time",
			description: "Datetime of Launch",
		},

	},
	required: [
	],
};
