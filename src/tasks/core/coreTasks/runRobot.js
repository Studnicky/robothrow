const config = require('../../../../config').tosser;
const Tosser = require('../../../tosser');

async function runRobot(next) {
	const tosser = new Tosser(config);

	const { entities: { releaseAngle, releaseVelocity } = {} } = this.state;

	await tosser.spinup(releaseVelocity);
	const result = await tosser.toss(releaseAngle, releaseVelocity);
	this.state.tossResult = result;
	return next();
}

module.exports = runRobot;
