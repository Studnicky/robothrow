const tasks = require('../tasks')['server'];

const mapRoutine = (routine) => {
	return routine.map((taskName) => {
		if (!tasks[taskName]) {
			throw new Error(`Undefined Task ${taskName} in Routine`);
		}
		return tasks[taskName];
	});
};

const trajectory = mapRoutine(['identifyArgs', 'runSimulation', 'formatOutput']);

module.exports = {
	trajectory
};
