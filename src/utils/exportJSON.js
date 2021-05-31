const fs = require('fs').promises;
const path = require('path');
const logger = require('../logger');

const rootPath = path.dirname(require.main.filename);
async function exportJson(contents, directory, fileName) {
	const exportDirectory = path.resolve(rootPath, '../', directory);
	const exportFilePath = path.resolve(rootPath, '../', directory, fileName);

	const exportContents = JSON.stringify(contents, null, 4);

	try {
		await fs.mkdir(exportDirectory, { recursive: true });
		logger.info(`utils.exportJson`, `Successfully created ${exportDirectory}.json`);

		try {
			await fs.writeFile(`${exportFilePath}.json`, exportContents);
			logger.info(`utils.exportJson`, `Successfully wrote ${exportFilePath}.json`);
		} catch (err) {
			logger.error(`utils.exportJson`, `Failed to write ${exportFilePath}.json`, err);
			throw err;
		}
	} catch (err) {
		if (err.code !== 'EEXIST') {
			logger.error(`utils.exportJson`, `Failed to create directory ${exportDirectory}`, err);
			throw err;
		}
	}
}

module.exports = exportJson;
