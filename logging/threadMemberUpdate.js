const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "threadMemberUpdate",
    description: "the core logging for threadMemberUpdate",
    async execute(client, thread) {
        client.channels.cache.get(assets.channels.logistics.misclogs[0]).send(thread)
    }
};