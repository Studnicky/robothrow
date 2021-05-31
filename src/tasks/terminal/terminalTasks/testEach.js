const Dispatcher = require('../../../dispatcher');
const utils = require('../../../utils');

module.exports = async function testEach(next) {
	//  Complex routines may be embedded and invoked as tasks
	//	It's a little weird in regard to imports, but it's super powerful for arranging workflows
	const routines = require('../../../routines').terminal;

	const allInputTasksQueue = this.state.inputRaw.map((input) => {
		return async () => {
			const trajectoryRoutine = new Dispatcher(routines.trajectory, {});
			const output = await trajectoryRoutine.execute(input);
			return { input, output };
		};
	});

	this.state.results = await utils.recursiveBatchIterate(allInputTasksQueue, 20);

	return next();
};
