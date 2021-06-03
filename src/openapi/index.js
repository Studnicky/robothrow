const config = require('../../config').openApi;
const logger = require('../logger');
const methods = require('./methods');

class OpenApi {
	constructor() {
		this.config = config;
		this.logger = logger;

		this.document = this._createDocument();
	}
}

OpenApi.prototype._createDocument = methods._createDocument;
OpenApi.prototype._getRouteDefinitions = methods._getRouteDefinitions;
OpenApi.prototype._formatPathsObject = methods._formatPathsObject;
OpenApi.prototype.exportDocument = methods.exportDocument;

//  A few of these just want arrays of values, so that's fine - just ignore the keys
module.exports = new OpenApi();
