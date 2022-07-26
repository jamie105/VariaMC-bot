const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "presenceUpdate",
    description: "the core logging for presenceUpdate",
    async execute(client, presence) {
        client.channels.cache.get(assets.channels.logistics.misclogs[0]).send(presence)
    }
};