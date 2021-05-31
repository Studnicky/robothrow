const tasks = require('../tasks')['terminal'];

//	For my chatbots, the routine definitions come from a user config database defined in front-end
//	They can be different across platforms, providers, users, and agent instances
const mapRoutine = (routine) => {
	return routine.map((taskName) => {
		if (!tasks[taskName]) {
			throw new Error(`Undefined Task ${taskName} in Routine`);
		}
		return tasks[taskName];
	});
};

const processJSON = mapRoutine(['importJSON', 'testEach', 'formatOutput', 'exportJSON']);
const trajectory = mapRoutine(['identifyArgs', 'runSimulation']);

module.exports = {
	processJSON,
	trajectory
};
