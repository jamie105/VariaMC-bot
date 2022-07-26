const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "guildBanAdd",
    description: "the core logging for guildBanAdd",
    async execute(client, ban) {
        client.channels.cache.get(assets.channels.logistics.moderationlogs[0]).send(ban)
    }
};