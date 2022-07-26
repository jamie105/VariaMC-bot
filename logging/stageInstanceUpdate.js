const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "stageInstanceUpdate",
    description: "the core logging for stageInstanceUpdate",
    async execute(client, stage) {
        client.channels.cache.get(assets.channels.logistics.misclogs[0]).send("```json" + JSON.stringify(stage) + "```")
    }
};