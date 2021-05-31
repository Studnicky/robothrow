const config = require('../../config').openapi;
const logger = require('../logger');
const methods = require('./methods');

class Openapi {
	constructor() {
		this.config = config;
		this.logger = logger;

		this.document = this._createDocument();
	}
}

Openapi.prototype._createDocument = methods._createDocument;
Openapi.prototype._getRouteDefinitions = methods._getRouteDefinitions;
Openapi.prototype._formatPathsObject = methods._formatPathsObject;
Openapi.prototype.exportDocument = methods.exportDocument;

//  A few of these just want arrays of values, so that's fine - just ignore the keys
module.exports = new Openapi();
