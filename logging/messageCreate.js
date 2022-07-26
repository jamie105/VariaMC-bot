const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "messageCreate",
    description: "the core logging for messageCreate",
    async execute(client, message) {
        client.channels.cache.get(assets.channels.logistics.messagelogs[0]).send("```json" + JSON.stringify(message) + "```")
    }
};