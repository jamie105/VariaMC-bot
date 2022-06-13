const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "channelPinsUpdate",
    description: "the core logging for channelPinsUpdate",
    async execute(client, channel) {
        console.log(channel)
    }
};