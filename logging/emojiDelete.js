const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "emojiDelete",
    description: "the core logging for emojiDelete",
    async execute(client, emoji) {
        client.channels.cache.get(assets.channels.logistics.modificationlogs[0]).send(emoji)
    }
};