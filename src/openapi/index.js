const fs = require('fs').promises;
const path = require('path');
//  Root swagger document
const info = require("./info");
const servers = require("./servers");
const paths = require("./paths");
const components = require("./components");
const security = require("./security");
const tags = require("./tags");
const externalDocs = require( "./externalDocs" );

const config = require( '../../config' ).openapi;
const rootPath = path.dirname( require.main.filename );
const exportDirectory = path.resolve( rootPath, '../', config.openApiDirectory );
const exportFilePath = path.resolve(rootPath, '../', config.openApiDirectory, config.schemaFileName);
const logger = require("../logger");


class Openapi {
	constructor () {

		this.config = config;

		this.document = {
	openapi: "3.0.3",
	info: info,
	//  External servers array, not mandatory
	servers: servers,
	paths: this._formatPathsObject(paths),
	components: components,
	//  Security overrides for routes that supercede top level, not mandatory - must match securityComponent schema
	security: security,
	tags: tags,
	externalDocs: externalDocs,
}

	}
	// Collects the path directories and assembles the constructed operations objects
_getRouteDefinitions(pathSchema) {
	const routeDefinitions = Object.entries(pathSchema).reduce(
		(pathRouteSchemas, [path, routeSchemas]) => {
			const pathRouteSchema = Object.entries(routeSchemas).map(
				([route, schema]) => {
					return { path, route, schema };
				},
			);

			return [...pathRouteSchemas, ...pathRouteSchema];
		},
		[],
	);

	return routeDefinitions;
};

//  Ok so, filesystems don't let this work cleanly because of slashes, this is going to get weird.
// https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#pathsObject
_formatPathsObject(paths) {
	const mergedPathRoutes = Object.values(paths).reduce(
		(pathRouteDefinitions, pathDefinition) => {
			const routeDefinitions = this._getRouteDefinitions(pathDefinition);

			for (const { path, route, schema } of routeDefinitions) {
				pathRouteDefinitions[path] = pathRouteDefinitions[path]
					? pathRouteDefinitions[path]
					: {};
				pathRouteDefinitions[path][route] = schema;
			}

			return pathRouteDefinitions;
		},
		{},
	);

	return mergedPathRoutes;
};

	async exportJson () {

		const document = JSON.stringify( this.document, null, 4 );

	try {
		await fs.mkdir(exportDirectory, { recursive: true });
			logger.info(this.constructor.name, `Successfully created ${ exportDirectory }.json` );

		try {
			await fs.writeFile(`${exportFilePath}.json`, document );
			logger.info(this.constructor.name, `Successfully wrote ${ exportFilePath }.json` );

		} catch (err) {
			logger.error(this.constructor.name, `Failed to write ${ exportFilePath }.json`, err );
			throw err;
		}

	} catch (err) {
		if (err.code !== "EEXIST") {
			logger.error(this.constructor.name, `Failed to create directory ${ exportDirectory }`, err);
			throw err;
		}
	}

	}

}



//  A few of these just want arrays of values, so that's fine - just ignore the keys
module.exports = new Openapi();
