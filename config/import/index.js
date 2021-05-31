'use strict';

const { IMPORT_PATH } = process.env;

function getImportConfig(cliArgs) {
	const { importPath } = cliArgs;

	return {
		importPath: importPath || IMPORT_PATH
	};
}

//  Import settings
module.exports = getImportConfig;
