const coreTasks = require('../core');
const serverTasks = require('./serverTasks');

module.exports = {
	...coreTasks,
	...serverTasks
};
