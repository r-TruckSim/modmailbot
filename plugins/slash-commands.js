const utils = require("../src/utils");

 /**
 * Created: April 20h, 2021
 * Contributors: N/A
 */
 
/* *************** */

/**
 * @param {import('../src/pluginApi').PluginAPI} param0 Plugin
 */
 
// module.exports = function({ bot, commands, config }) {
	
	slash: true,
	testOnly: true,
	description: 'Ping a Pong',
	callback: ({}) => 
		{
		return 'Pong!'
		},
	}	