const { URL } = require('url');
const config = require('../../config');

//  The basic info for the swagger can come from the package.json && process.env
const { name, version } = require('../../config');
const sourceDocumentUrl = new URL(`${config.openapi.schemaFileName}`, `http://${config.express.host}:${config.express.port}`);

const openApiDescription = `This guide provides an API specification for the robo-throw project.

---

### OpenAPI v3

You can view and download this API specification as a raw JSON document here: [OpenAPI v3 Document](${sourceDocumentUrl.href})

The document adheres to the [OpenAPI v3](https://swagger.io/specification/) specification.

There is a large ecosystem or open source tools that support the OpenAPI v3 specification, a list of which may be found here: [OpenApi Tools](https://openapi.tools/)

For example, the JSON document may be imported into Postman to create a functional test suite:
- [OpenApi Postman Suite](https://github.com/postmanlabs/openapi-to-postman)

---
`;

module.exports = {
	title: name,
	description: openApiDescription,
	// termsOfService: 'https://tosdr.org/', //  URL to the terms of service?
	// contact: contributors[0],
	// license: convertNPMLicenseToSwagger(license),
	version: version
};
