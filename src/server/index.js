//  Always load first because of .dot-env even if we're not referecing it directly here
const config = require('../../config');

const express = require('express');
const swaggerUi = require('swagger-ui-express');

const errors = require('../error');
const logger = require('../logger');
const routes = require('./routes');
const openapi = require('../openapi');

const app = express();
app.logger = logger;

openapi.exportDocument().then(() => {
	//  https://www.npmjs.com/package/swagger-ui-express
	app.get(`/trajectory`, routes.trajectory);
	app.get(`/${config.openapi.schemaFileName}`, routes.serveOpenApiDoc);
	app.use('/', swaggerUi.serve, swaggerUi.setup(openapi.document));

	const server = app.listen(config.express.port, () => {
		app.logger.info(`${config.name} [${config.env}] API running on ${config.express.host}:${config.express.port}`);
	});
	app.on('error', errors.mapError);
	server.on('error', errors.mapError);
});

// Expose app
module.exports = app;
