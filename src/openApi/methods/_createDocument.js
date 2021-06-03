const document = require('../document');

function _createDocument() {
	return {
		...document,
		//  It's a little harder to do this as directly because filesystems don't like slashes starting filenames
		paths: this._formatPathsObject(document.paths)
	};
}

module.exports = _createDocument;
