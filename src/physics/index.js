const config = require('../../config').physics;
const logger = require('../logger');
const methods = require('./methods');

class Physics {
	constructor() {
		this.config = config;
		this.logger = logger;
	}
}

Physics.prototype.degreesToRadians = methods.degreesToRadians;
Physics.prototype.getDistanceVertical = methods.getDistanceVertical;
Physics.prototype.getDistanceHorizontal = methods.getDistanceHorizontal;
Physics.prototype.getVelocityHorizontal = methods.getVelocityHorizontal;
Physics.prototype.getVelocityVertical = methods.getVelocityVertical;
Physics.prototype.getTimeInMotion = methods.getTimeInMotion;

module.exports = new Physics();
