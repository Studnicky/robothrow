module.exports = function addTask(task = () => {}) {
	this.logger.trace(this.constructor.name, `Adding task: ${task.name}`);
	this.queue.push(task);
};
