const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "stickerUpdate",
    description: "the core logging for stickerUpdate",
    async execute(client, sticker) {
        console.log(sticker)
    }
};