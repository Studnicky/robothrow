// Collects the path directories and assembles the constructed operations objects
function _getRouteDefinitions(pathSchema) {
	const routeDefinitions = Object.entries(pathSchema).reduce((pathRouteSchemas, [path, routeSchemas]) => {
		const pathRouteSchema = Object.entries(routeSchemas).map(([route, schema]) => {
			return { path, route, schema };
		});

		return [...pathRouteSchemas, ...pathRouteSchema];
	}, []);

	return routeDefinitions;
}

module.exports = _getRouteDefinitions;
