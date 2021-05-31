function getVelocityVertical(releaseAngle, initialVelocity) {
	// sin releaseAngle = y / initialVelocity;
	const angleAsRadians = this.degreesToRadians(releaseAngle);
	const velocityVertical = Math.sin(angleAsRadians) * initialVelocity;
	return velocityVertical;
}

module.exports = getVelocityVertical;
