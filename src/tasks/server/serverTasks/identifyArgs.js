module.exports = async function identifyArgs(next) {
	//	In a NLP scenario, turning what the user said into actionable args is a super massive effort that requires a whole lot of steps.
	//	On the other side, financial tech do some really awful things with their API (if they even have API)
	//	It's been a long time since I got to work in a neatly encapsulated environment where I can count on the input making sense.

	const { req: { query: { releaseAngle, releaseVelocity } = {} } = {} } = this.state;

	const parsedReleaseAngle = Number.parseFloat(releaseAngle, 10);
	const parsedReleaseVelocity = Number.parseFloat(releaseVelocity, 10);

	this.state.entities = {
		releaseAngle: Number.isNaN(parsedReleaseAngle) ? null : parsedReleaseAngle,
		releaseVelocity: Number.isNaN(parsedReleaseVelocity) ? null : parsedReleaseVelocity
	};

	return next();
};
