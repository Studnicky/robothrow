const config = require('../../config').tosser;
const logger = require('../logger');
const methods = require('./methods');

//  We're going to just pretend that we're connected to an actual robot with dummy methods here.
//  This would likely be an RTC/socket enabled communications channel.
class Tosser {
	constructor() {
		this.config = config;
		this.logger = logger;

		//	We would invoke connection pool here and assign to instance, etc
	}
}

Tosser.prototype.spinup = methods.spinup;
Tosser.prototype.toss = methods.toss;

module.exports = Tosser;
