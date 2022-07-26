const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "channelUpdate",
    description: "the core logging for channelUpdate",
    async execute(client, channel) {
        client.channels.cache.get(assets.channels.logistics.modificationlogs[0]).send(channel)
    }
};