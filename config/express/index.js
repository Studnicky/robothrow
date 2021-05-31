const { SECRET_TOKEN, APP_HOST = "localhost", APP_PORT = 3000  } = process.env;

const defaultConfig = {
	host: APP_HOST,
	port: APP_PORT,
	env: 'development',
	proxy: true,
	keys: [SECRET_TOKEN],
	context: {},
	silent: false,
 };

module.exports = {
    development: defaultConfig,
    test: {
        ...defaultConfig,
		env: 'test',
	},
    staging: {
        ...defaultConfig,
		env: 'staging',
	},
    production: {
        ...defaultConfig,
		env: 'production',
		silent: true,
	},
};
