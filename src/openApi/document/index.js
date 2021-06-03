//  Root swagger document
const info = require('./info');
const servers = require('./servers');
const paths = require('./paths');
const components = require('./components');
const security = require('./security');
const tags = require('./tags');
const externalDocs = require('./externalDocs');

const document = {
	//	So, openApi refers to itself in its documentation in camel case, but this particular field MUST be all lower
	openapi: '3.0.3',
	info: info,
	//  External servers array, not mandatory
	servers: servers,
	paths: paths,
	components: components,
	//  Security overrides for routes that supercede top level, not mandatory - must match securityComponent schema
	security: security,
	tags: tags,
	externalDocs: externalDocs
};

module.exports = document;
