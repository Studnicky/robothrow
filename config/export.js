'use strict';

const { EXPORT_PATH = 'output', FILE_NAME = 'report' } = process.env;

function getExportConfig(cliArgs) {
	const { exportPath, fileName } = cliArgs;

	return {
		exportPath: exportPath || EXPORT_PATH,
		fileName: fileName || FILE_NAME
	};
}

module.exports = getExportConfig;
