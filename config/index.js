'use strict';
const path = require('path');
const dotenv = require('dotenv');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const cliArgs = yargs(hideBin(process.argv)).argv;

const rootPath = path.dirname(require.main.filename);
const envPath = path.resolve(rootPath, '../.env');

const envConfig = dotenv.config({
	path: envPath
});

const app = require('./app');
const loggerConfig = require('./logger');
const expressConfig = require('./express');
const openApiConfig = require('./openApi');
const importConfig = require('./import')(cliArgs);
const exportConfig = require('./export')(cliArgs);
const physicsConfig = require('./physics');
const dispatcherConfig = require('./dispatcher');
const utilsConfig = require('./utils');
const tosserConfig = require('./tosser');

//  Create config from ENV
const config = {
	...app,
	openApi: openApiConfig,
	import: importConfig,
	export: exportConfig,
	logger: loggerConfig[app.env],
	express: expressConfig[app.env],
	physics: physicsConfig,
	dispatcher: dispatcherConfig,
	utils: utilsConfig,
	tosser: tosserConfig,
	cliArgs
};

module.exports = config;
