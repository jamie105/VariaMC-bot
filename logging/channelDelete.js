const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "channelDelete",
    description: "the core logging for channelDelete",
    async execute(client, channel) {
        client.channels.cache.get(assets.channels.logistics.modificationlogs[0]).send("```json" + JSON.stringify(channel) + "```")
    }
};