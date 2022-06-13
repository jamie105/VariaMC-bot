const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "messageDeleteBulk",
    description: "the core logging for messageDeleteBulk",
    async execute(client, message) {
        console.log(message)
    }
};