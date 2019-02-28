/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
	/**
	 * built-in config
	 * @type {Egg.EggAppConfig}
	 **/
	const config = {};

	// use for cookie sign key, should change to your own and keep security
	config.keys = appInfo.name + '_1551168734209_217';

	// add your middleware config here
	config.middleware = [];

	// add your user config here
	const userConfig = {
		// myAppName: 'egg',
	};
	userConfig.view = {
		defaultViewEngine: 'nunjucks',
		mapping: {
			'.tpl': 'nunjucks',
		},
	};

	userConfig.mysql = {
		client: {
			// host
			host: 'localhost',
			// 端口号
			port: '3306',
			// 用户名
			user: 'root',
			// 密码
			password: 'root',
			// 数据库名
			database: 'blog',
		},
		// 是否加载到 app 上，默认开启
		app: true,
		// 是否加载到 agent 上，默认关闭
		agent: false,
	};
	userConfig.security = {
		csrf: {
			enable: false,
		},
	};

	return {
		...config,
		...userConfig,
	};
};
