const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "guildBanRemove",
    description: "the core logging for guildBanRemove",
    async execute(client, ban) {
        client.channels.cache.get(assets.channels.logistics.moderationlogs[0]).send("```json" + JSON.stringify(ban) + "```")
    }
};