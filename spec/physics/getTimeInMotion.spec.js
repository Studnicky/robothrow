'use strict';

const Physics = require('../../src/physics');

//	So, I don't know much about physics.  I built the module TDD based around this video:
// 	https://www.youtube.com/watch?v=4jNE3eTVEgo&t=4s

const testCases = [
	{
		testName: 'test one',
		input: {
			velocityVertical: 2.6765
		},
		expected: { timeInMotion: '0.54567' }
	}
];

beforeAll(() => {});

beforeEach(() => {});

afterEach(() => {});

describe('Test physics', () => {
	for (const test of testCases) {
		const { testName, input, expected } = test;
		it(`gets time in motion for ${testName}`, async () => {
			const timeInMotion = Physics.getTimeInMotion(input.velocityVertical);

			expect(Number.parseFloat(timeInMotion).toPrecision(5)).toEqual(expected.timeInMotion);
		});
	}
});
