const config = require('../../../../config').export;
const utils = require('../../../utils');
module.exports = async function exportJSON(next) {
	await utils.exportJson(this.state.outputJSON, config.exportDirectory, config.fileName);

	return next();
};
