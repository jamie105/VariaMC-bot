const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "stickerDelete",
    description: "the core logging for stickerDelete",
    async execute(client, sticker) {
        client.channels.cache.get(assets.channels.logistics.modificationlogs[0]).send("```json" + JSON.stringify(sticker) + "```")
    }
};