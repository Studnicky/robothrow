function getTimeInMotion(verticalVelocity) {
	//  Assuming no wind resistance, launched from ground level, ends at ground level, etc
	//  If the above conditions are true, verticalVelocity final is just inverted sign of initial
	const velocityVerticalFinal = (verticalVelocity *= -1);
	//  Assuming perfect parabolic arch
	const timeInMotion = (velocityVerticalFinal / this.config.GRAVITY_CONST) * 2;
	return timeInMotion;
}

module.exports = getTimeInMotion;
