//  Ok so, filesystems don't let this work cleanly because of slashes, this is going to get weird.
// https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#pathsObject
function _formatPathsObject(paths) {
	const mergedPathRoutes = Object.values(paths).reduce((pathRouteDefinitions, pathDefinition) => {
		const routeDefinitions = this._getRouteDefinitions(pathDefinition);

		for (const { path, route, schema } of routeDefinitions) {
			pathRouteDefinitions[path] = pathRouteDefinitions[path] ? pathRouteDefinitions[path] : {};
			pathRouteDefinitions[path][route] = schema;
		}

		return pathRouteDefinitions;
	}, {});

	return mergedPathRoutes;
}
module.exports = _formatPathsObject;
