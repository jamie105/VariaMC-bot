const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "threadDelete",
    description: "the core logging for threadDelete",
    async execute(client, thread) {
        client.channels.cache.get(assets.channels.logistics.misclogs[0]).send(thread)
    }
};