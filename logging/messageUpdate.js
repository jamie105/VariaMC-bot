const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "messageUpdate",
    description: "the core logging for messageUpdate",
    async execute(client, message) {
        console.log(message)
    }
};