const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "threadCreate",
    description: "the core logging for threadCreate",
    async execute(client, thread) {
        client.channels.cache.get(assets.channels.logistics.misclogs[0]).send("```json" + JSON.stringify(thread) + "```")
    }
};