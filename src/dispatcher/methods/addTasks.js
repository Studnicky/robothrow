module.exports = function addTasks(tasks = []) {
	tasks = Array.isArray(tasks) ? tasks : [tasks];

	this.logger.trace(this.constructor.name, `Adding ${tasks.length} tasks to queue`);

	for (const task of tasks) {
		this.addTask(task);
	}
};
