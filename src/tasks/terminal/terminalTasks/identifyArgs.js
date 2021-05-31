module.exports = async function identifyArgs(next, inputCase) {
	//	It's been a long time since I got to work in a neatly encapsulated environment where I can count on the input making sense.
	//	In a NLP scenario, turning what the user said to an agent into actionable args is a super massive effort that requires a whole lot of steps and very expensive neural network engineers who insist that they're not just writing fuzzy match reduce functions.
	//	The idea here is that the entry point (terminal) defines an interface to parse args into a standard data schema where a different entry point (say, another platform/frontend) would do it differently - but the resulting data contract would be the same.
	const { releaseAngle, releaseVelocity } = inputCase;

	this.state.entities = { releaseAngle, releaseVelocity };
	return next();
};
