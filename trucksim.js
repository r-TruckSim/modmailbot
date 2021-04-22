const utils = require("../src/utils");

/**
 * Created: April 19th, 2021
 * Contributors: Timmy#3125
 */

/* *************** */

/**
 * @param {import('../src/pluginApi').PluginAPI} param0 Plugin
 */

module.exports = function({bot, commands, config}) {

    /**
     * Sends a message to a channel ID.
     * Usage: !say 12345678 hewwo uwu or !say #garage raccoons are the best
     */

    module.exports = function({bot, commands, config}) {

        commands.addGlobalCommand('boop', [{
            name: 'channelId',
            type: 'string'
        }, {
            name: 'text',
            type: 'string',
            catchAll: true
        }], (msg, args) => {
            const usage = `Usage: ${config.prefix}boop <channelID or #> <message>`;
            const channelId = args.channelId.replace(/\D+/g, '');
            if (Number(channelId) === 0) {
                bot.createMessage(msg.channel.id, {
                    content: `Invalid channel ID.\n${usage}`,
                    messageReferenceID: msg.id
                });
                return;
            }
            bot.createMessage(channelId, args.text).catch(reason => {
                console.log(`Error while sending command \`${msg.content}\`: ${reason}`);
                bot.createMessage(msg.channel.id, {
                    content: `Error while sending the message, check server logs.\n${usage}`,
                    messageReferenceID: msg.id
                });
            });
        });

        /* *************** */

        /**
         * Purges last X messages
         * Usage: !br 100 12345678 or !br 100 #garage to delete messages in a specific channel, or just !br 100 to delete messages in the same channel
         */

        commands.addGlobalCommand('bd', [{
            name: 'limit',
            type: 'number'
        }, {
            name: 'channelId',
            type: 'string',
            required: false
        }], async(msg, args) => {
            const usage = `Usage: ${config.prefix}bd <limit> [channelId or #]`;
            const MAX_MESSAGES = 300;
            let channelId = (args.channelId) ? args.channelId.replace(/\D+/g, '') : msg.channel.id;
            if (Number(channelId) === 0) {
                bot.createMessage(msg.channel.id, {
                    content: `Invalid channel ID.\n${usage}`,
                    messageReferenceID: msg.id
                });
                return;
            }
            let limit = (args.limit > 0 && args.limit < MAX_MESSAGES) ? args.limit : MAX_MESSAGES;
            await msg.delete();
            bot.purgeChannel(channelId, limit).then(purgedMessages => {
                if (purgedMessages > 0) {
                    bot.createMessage(msg.channel.id, {
                        content: `Purge successful of ${purgedMessages} in <#${channelId}>.`
                    });
                    return;
                };
            });
        });
    }
}