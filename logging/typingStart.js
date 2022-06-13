const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "typingStart",
    description: "the core logging for typingStart",
    async execute(client, typing) {
        console.log(typing)
    }
};