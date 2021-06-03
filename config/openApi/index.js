'use strict';

const { OPENAPI_DIRECTORY = 'api-spec', SCHEMA_FILE_NAME = 'schema' } = process.env;

const openApiConfig = {
	openApiDirectory: OPENAPI_DIRECTORY,
	schemaFileName: SCHEMA_FILE_NAME
};

module.exports = openApiConfig;
