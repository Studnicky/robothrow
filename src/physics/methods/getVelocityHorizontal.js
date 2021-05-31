function getVelocityHorizontal(releaseAngle, initialVelocity) {
	// sin releaseAngle = y / initialVelocity;
	const angleAsRadians = this.degreesToRadians(releaseAngle);
	const velocityHorizontal = Math.cos(angleAsRadians) * initialVelocity;
	return velocityHorizontal;
}

module.exports = getVelocityHorizontal;
