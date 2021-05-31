module.exports = async function formatOutput(next) {
	const { result } = this.state;
	const input = this.state.entities;

	const { pass, fail } = result;
	const mappedResult = pass ? _mapSuccess(input, pass) : _mapFailure(input, fail);

	this.state.result = mappedResult;

	return next();
};

function _mapSuccess(input, pass) {
	const { releaseAngle, releaseVelocity } = input;
	const { arcHeight, distance, duration } = pass;

	return {
		case: {
			releaseAngle,
			releaseVelocity
		},
		result: {
			arcHeight,
			distance,
			duration
		}
	};
}
function _mapFailure(input, fail) {
	const { releaseAngle, releaseVelocity } = input;
	const { err } = fail;

	return {
		case: {
			releaseAngle,
			releaseVelocity
		},
		result: JSON.stringify(err)
	};
}
