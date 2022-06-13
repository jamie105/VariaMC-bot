const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "messageDelete",
    description: "the core logging for messageDelete",
    async execute(client, message) {
        console.log(message)
    }
};