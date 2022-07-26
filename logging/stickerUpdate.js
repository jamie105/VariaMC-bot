const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "stickerUpdate",
    description: "the core logging for stickerUpdate",
    async execute(client, sticker) {
        client.channels.cache.get(assets.channels.logistics.modificationlogs[0]).send(sticker)
    }
};