const config = require('../../config').dispatcher;
const logger = require('../logger');
const methods = require('./methods');

const defaultConfig = {};
class Dispatcher {
	constructor(queue = [], initialState = {}, options = defaultConfig) {
		this.config = { ...defaultConfig, ...config.dispatcher, ...options };
		this.logger = logger;
		this.state = {
			...initialState,
			taskIndex: 0
		};
		this.queue = Array.isArray(queue) ? queue : [];
		this.logger.trace(this.constructor.name, `Created new task queue: ${this.queue.length}`);
	}
}

Dispatcher.prototype.addTask = methods.addTask;
Dispatcher.prototype.addTasks = methods.addTasks;
Dispatcher.prototype.execute = methods.execute;
Dispatcher.prototype.executeTask = methods.executeTask;
Dispatcher.prototype.onComplete = methods.onComplete;

module.exports = Dispatcher;
