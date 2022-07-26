const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "messageReactionRemoveEmoji",
    description: "the core logging for messageReactionRemoveEmoji",
    async execute(client, reaction) {
        client.channels.cache.get(assets.channels.logistics.messagelogs[0]).send(reaction)
    }
};