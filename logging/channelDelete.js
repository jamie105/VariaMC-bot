const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "channelDelete",
    description: "the core logging for channelDelete",
    async execute(client, channel) {
        console.log(channel)
    }
};