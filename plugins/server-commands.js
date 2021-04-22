const utils = require("../src/utils");

 /**
 * Created: April 20h, 2021
 * Contributors: N/A
 */
 
/* *************** */

/**
 * @param {import('../src/pluginApi').PluginAPI} param0 Plugin
 */
 
bot.registerCommand("ping", "Pong!", { // Make a ping command
// Responds with "Pong!" when someone says "!ping"
    description: "Pong!",
    fullDescription: "This command could be used to check if the bot is up. Or entertainment when you're bored."
});