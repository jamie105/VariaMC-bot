const Discord = require('discord.js');
module.exports = {
    name: 'counting',
    description: 'core for counting channel, deletes if wrong number',
    async execute(message, client) {
        for (let i = 0; i < arrays.counting.countingServer.length; i++) {
            if (message.guild.id === arrays.counting.countingServer[i] && message.channel.id === arrays.counting.countingChannel[i]) {
                var channel = message.guild.channels.cache.get(arrays.counting.countingChannel[i]);
                channel.messages.fetch({
                    limit: 2
                }).then(messages => {
                    if (Math.abs(message.content) === parseInt(Math.abs(messages.last().content) + 1)) {} else {
                        message.delete()
                    }
                })
            } else {
                return;
            }
        }
    }
};
