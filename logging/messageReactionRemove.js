const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "messageReactionRemove",
    description: "the core logging for messageReactionRemove",
    async execute(client, reaction) {
        client.channels.cache.get(assets.channels.logistics.messagelogs[0]).send("```json" + JSON.stringify(reaction) + "```")
    }
};