const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "stickerCreate",
    description: "the core logging for stickerCreate",
    async execute(client, sticker) {
        console.log(sticker)
    }
};