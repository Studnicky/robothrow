const utils = require('../../utils');
async function exportDocument() {
	await utils.exportJson(this.document, this.config.openApiDirectory, this.config.schemaFileName);
}

module.exports = exportDocument;
