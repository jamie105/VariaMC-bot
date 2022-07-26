const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "guildIntegrationsUpdate",
    description: "the core logging for guildIntegrationsUpdate",
    async execute(client, guild) {
        client.channels.cache.get(assets.channels.logistics.modificationlogs[0]).send("```json" + JSON.stringify(guild) + "```")
    }
};