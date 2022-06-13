const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "channelCreate",
    description: "the core logging for channelCreate",
    async execute(client, channel) {
        console.log(channel)
    }
};