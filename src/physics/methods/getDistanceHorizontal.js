function getDistanceHorizontal(velocityHorizontal, timeInMotion) {
	const distanceHorizontal = velocityHorizontal * timeInMotion;

	return distanceHorizontal;
}

module.exports = getDistanceHorizontal;
