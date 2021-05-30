const fs = require('fs').promises;
const path = require('path');

const config = require(`../../../config`).openapi;
const rootPath = path.dirname( require.main.filename );
const filePath = `${path.resolve(rootPath, '../', config.openApiDirectory, config.schemaFileName)}.json`;

async function serveOpenApiDoc(req, res) {
	const openApi = await fs.readFile(filePath);
	const openApiJsonDoc = JSON.parse(openApi);
	res.json(openApiJsonDoc);
}

module.exports = serveOpenApiDoc;
