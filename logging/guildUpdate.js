const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "guildUpdate",
    description: "the core logging for guildUpdate",
    async execute(client, guild) {
        client.channels.cache.get(assets.channels.logistics.modificationlogs[0]).send("```json" + JSON.stringify(guild) + "```")
    }
};