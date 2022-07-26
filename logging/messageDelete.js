const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "messageDelete",
    description: "the core logging for messageDelete",
    async execute(client, message) {
        client.channels.cache.get(assets.channels.logistics.messagelogs[0]).send(message)
    }
};