const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "webhookUpdate",
    description: "the core logging for webhookUpdate",
    async execute(client, webhook) {
        client.channels.cache.get(assets.channels.logistics.modificationlogs[0]).send("```json" + JSON.stringify(webhook) + "```")
    }
};