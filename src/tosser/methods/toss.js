const Physics = require('../../physics');

//	So, I don't actually know physics that well and pulled most of this from youtube videos for highschoolers.
//	All I really remember from my physics class was programming my TI-83 to execute the formulas for me and spit out a convincing number of intermediate steps.
module.exports = async function toss(releaseAngle, releaseVelocity) {
	const initialVelocityVertical = Physics.getVelocityVertical(releaseAngle, releaseVelocity);
	const initialVelocityHorizontal = Physics.getVelocityHorizontal(releaseAngle, releaseVelocity);
	const timeInMotion = Physics.getTimeInMotion(initialVelocityVertical);
	const arcHeight = Physics.getDistanceVertical(initialVelocityVertical);
	const distanceTossed = Physics.getDistanceHorizontal(initialVelocityHorizontal, timeInMotion);

	return {
		duration: timeInMotion,
		distance: distanceTossed,
		arcHeight
	};
};
