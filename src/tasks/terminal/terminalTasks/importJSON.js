const config = require('../../../../config').import;
const path = require('path');

const rootPath = path.dirname(require.main.filename);
module.exports = async function importJSON(next) {
	const filePath = path.resolve(rootPath, '../', config.importPath);

	this.state.inputRaw = require(filePath);
	//	This is contrived, but the idea here is that the taskQueue can self-modify based on the state.

	return next();
};
