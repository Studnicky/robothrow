module.exports = async function execute(...args) {
	try {
		return await this.executeTask(0, ...args);
	} catch (err) {
		this.logger.error(this.constructor.name, `Failed!`);
		throw err;
	}
};
