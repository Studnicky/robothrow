'use strict';

const Physics = require('../../src/physics');

//	So, I don't know much about physics.  I built the module TDD based around this video:
// 	https://www.youtube.com/watch?v=4jNE3eTVEgo&t=4s

const testCases = [
	{
		testName: 'test one',
		input: {
			velocityHorizontal: 2.6765,
			timeInMotion: 0.54567
		},
		expected: { distanceHorizontal: '1.4605' }
	}
];

beforeAll(() => {});

beforeEach(() => {});

afterEach(() => {});

describe('Test physics', () => {
	for (const test of testCases) {
		const { testName, input, expected } = test;
		it(`gets time in motion for ${testName}`, async () => {
			const distanceHorizontal = Physics.getDistanceHorizontal(input.velocityHorizontal, input.timeInMotion);

			expect(Number.parseFloat(distanceHorizontal).toPrecision(5)).toEqual(expected.distanceHorizontal);
		});
	}
});
