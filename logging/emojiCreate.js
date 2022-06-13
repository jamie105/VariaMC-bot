const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "emojiCreate",
    description: "the core logging for emojiCreate",
    async execute(client, emoji) {
        console.log(emoji)
    }
};