const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "messageReactionAdd",
    description: "the core logging for messageReactionAdd",
    async execute(client, reaction) {
        client.channels.cache.get(assets.channels.logistics.messagelogs[0]).send("```json" + JSON.stringify(reaction) + "```")
    }
};