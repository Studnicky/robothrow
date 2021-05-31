'use strict';

const Physics = require('../../src/physics');

//	So, I don't know much about physics.  I built the module TDD based around this video:
// 	https://www.youtube.com/watch?v=4jNE3eTVEgo&t=4s

const testCases = [
	{
		testName: 'test one',
		input: {
			releaseAngle: 42,
			initialVelocity: 4
		},
		expected: { horizontalVelocity: '2.9726', verticalVelocity: '2.6765' }
	}
];

beforeAll(() => {});

beforeEach(() => {});

afterEach(() => {});

describe('Test physics initial args', () => {
	for (const test of testCases) {
		const { testName, input, expected } = test;
		it(`gets horizontal and vertical velocity for ${testName}`, async () => {
			const horizontalVelocity = Physics.getVelocityHorizontal(input.releaseAngle, input.initialVelocity);
			const verticalVelocity = Physics.getVelocityVertical(input.releaseAngle, input.initialVelocity);

			expect(Number.parseFloat(horizontalVelocity).toPrecision(5)).toEqual(expected.horizontalVelocity);
			expect(Number.parseFloat(verticalVelocity).toPrecision(5)).toEqual(expected.verticalVelocity);
		});
	}
});
