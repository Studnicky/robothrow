// https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#pathItemObject

const getTrajectoryDescription = `
### Fetch a trajectory for a given args state

Expected to return a Trajectory Instance

### Requirements
- Must include release angle
- Must include release velocity
`;

module.exports = {
	'/trajectory': {
		get: {
			summary: 'Get Trajectory',
			description: getTrajectoryDescription,
			tags: ['Trajectory'],
			responses: {
				200: {
					$ref: '#/components/responses/trajectoryResponse'
				}
			},
			parameters: [
				{
					$ref: '#/components/parameters/releaseAngleQuery'
				},
				{
					$ref: '#/components/parameters/releaseVelocityQuery'
				}
			]
		}
	}
};
