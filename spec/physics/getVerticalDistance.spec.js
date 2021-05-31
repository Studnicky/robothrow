'use strict';

const Physics = require('../../src/physics');

//	So, I don't know much about physics.  I built the module TDD based around this video:
// 	https://www.youtube.com/watch?v=4jNE3eTVEgo&t=4s

const testCases = [
	{
		testName: 'test one',
		input: {
			verticalVelocity: 2.6765
		},
		expected: { distanceVertical: '0.36512' }
	}
];

beforeAll(() => {});

beforeEach(() => {});

afterEach(() => {});

describe('Test physics', () => {
	for (const test of testCases) {
		const { testName, input, expected } = test;
		it(`gets time in motion for ${testName}`, async () => {
			const distanceVertical = Physics.getDistanceVertical(input.verticalVelocity);

			expect(Number.parseFloat(distanceVertical).toPrecision(5)).toEqual(expected.distanceVertical);
		});
	}
});
