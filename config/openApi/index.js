'use strict';

const { OPENAPI_DIRECTORY = 'openapi', SCHEMA_FILE_NAME = 'schema' } = process.env;

const openapiConfig = {
		openApiDirectory: OPENAPI_DIRECTORY,
		schemaFileName: SCHEMA_FILE_NAME
	};

module.exports = openapiConfig;
