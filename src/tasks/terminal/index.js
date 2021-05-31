const coreTasks = require('../core');
const terminalTasks = require('./terminalTasks');

module.exports = {
	...coreTasks,
	...terminalTasks
};
