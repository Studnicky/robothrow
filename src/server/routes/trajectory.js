const Dispatcher = require('../../dispatcher');
const routines = require('../../routines').server;

async function getTrajectory(req, res) {
	const trajectoryRoutine = new Dispatcher(routines.trajectory, { req });
	const trajectoryResult = await trajectoryRoutine.execute(req);

	const { result: { case: input, result: trajectory } = {} } = trajectoryResult;

	res.json({ data: { case: input, trajectory } });
}

module.exports = getTrajectory;
