const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "threadListSync",
    description: "the core logging for threadListSync",
    async execute(client, thread) {
        client.channels.cache.get(assets.channels.logistics.misclogs[0]).send(thread)
    }
};