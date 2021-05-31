const config = require('../../../../config');

const Tosser = require('../../../tosser');

//	Yes, I know this is identical to ./runRobot.
//	The idea this is poorly expressing is that different config options can sub over tasks for dry-runs
async function runSimulation(next) {
	const tosser = new Tosser(config.tosser);

	const { entities: { releaseAngle, releaseVelocity } = {} } = this.state;

	try {
		await tosser.spinup(releaseVelocity);
		const result = await tosser.toss(releaseAngle, releaseVelocity);
		this.state.result = { pass: result };
	} catch (err) {
		this.state.result = { fail: err };
	}

	return next();
}

module.exports = runSimulation;
