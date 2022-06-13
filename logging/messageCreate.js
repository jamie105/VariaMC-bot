const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "messageCreate",
    description: "the core logging for messageCreate",
    async execute(client, message) {
        console.log(message)
    }
};