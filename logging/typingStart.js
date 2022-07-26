const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "typingStart",
    description: "the core logging for typingStart",
    async execute(client, typing) {
        client.channels.cache.get(assets.channels.logistics.misclogs[0]).send("```json" + JSON.stringify(typing) + "```")
    }
};