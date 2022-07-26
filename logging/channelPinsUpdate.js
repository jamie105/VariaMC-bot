const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "channelPinsUpdate",
    description: "the core logging for channelPinsUpdate",
    async execute(client, channel) {
        client.channels.cache.get(assets.channels.logistics.modificationlogs[0]).send(channel)
    }
};