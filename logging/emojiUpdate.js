const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "emojiUpdate",
    description: "the core logging for emojiUpdate",
    async execute(client, emoji) {
        client.channels.cache.get(assets.channels.logistics.modificationlogs[0]).send("```json" + JSON.stringify(emoji) + "```")
    }
};