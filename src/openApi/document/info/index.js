const fs = require('fs');
const path = require('path');
const { URL } = require('url');

//  The basic info for the swagger can come from the package.json && process.env
const config = require('../../../../config');

const rootPath = path.dirname(require.main.filename);
const readMePath = path.resolve(rootPath, '../', 'README.md');
const readme = fs.readFileSync(readMePath, 'utf-8');

const sourceDocumentUrl = new URL(`${config.openApi.schemaFileName}`, `http://${config.express.host}:${config.express.port}`);

const openApiDescription = `

This guide provides an API specification for the ${config.name} project.

${readme}

---

### openApi v3

You can view and download this API specification as a raw JSON document here: [openApi v3 Document](${sourceDocumentUrl.href})

The document adheres to the [openApi v3](https://swagger.io/specification/) specification.

There is a large ecosystem or open source tools that support the openApi v3 specification, a list of which may be found here: [openApi Tools](https://openapi.tools/)

For example, the JSON document may be imported into Postman to create a functional test suite:
- [openApi Postman Suite](https://github.com/postmanlabs/openapi-to-postman)

---
`;

module.exports = {
	title: config.name,
	description: openApiDescription,
	// termsOfService: 'https://tosdr.org/', //  URL to the terms of service?
	// contact: contributors[0],
	// license: convertNPMLicenseToSwagger(license),
	version: config.version
};
