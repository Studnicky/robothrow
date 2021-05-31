const getDistanceVertical = require('./getDistanceVertical');
const getDistanceHorizontal = require('./getDistanceHorizontal');
const getVelocityHorizontal = require('./getVelocityHorizontal');
const getVelocityVertical = require('./getVelocityVertical');
const getTimeInMotion = require('./getTimeInMotion');
const degreesToRadians = require('./degreesToRadians');

module.exports = {
	degreesToRadians,
	getDistanceVertical,
	getDistanceHorizontal,
	getVelocityHorizontal,
	getVelocityVertical,
	getTimeInMotion
};
