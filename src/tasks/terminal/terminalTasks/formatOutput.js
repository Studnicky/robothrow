module.exports = async function formatOutput(next) {
	const { results = [] } = this.state;

	const outputJSON = results.reduce(
		(output, testCase, index) => {
			const { input, output: { result: { pass, fail } = {} } = {} } = testCase;
			const testLabel = `Test-${index}`;
			const discriminator = pass ? 'pass' : 'fail';
			const mappedResult = pass ? { [testLabel]: _mapSuccess(input, pass) } : { [testLabel]: _mapFailure(input, fail) };
			output[discriminator].push(mappedResult);
			return output;
		},
		{
			pass: [],
			fail: []
		}
	);

	this.state.outputJSON = outputJSON;

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
