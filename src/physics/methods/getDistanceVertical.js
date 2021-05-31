function getDistanceVertical(velocityVertical) {
	const distanceVertical = (Math.pow(velocityVertical, 2) * -1) / (this.config.GRAVITY_CONST * 2);

	return distanceVertical;
}

module.exports = getDistanceVertical;
