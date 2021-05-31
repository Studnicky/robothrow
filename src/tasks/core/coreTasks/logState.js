async function logState(next) {
	this.logger.info(this.constructor.name, JSON.stringify(this.state, null, 4));
	return next();
}

module.exports = logState;
