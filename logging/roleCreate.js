const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "roleCreate",
    description: "the core logging for roleCreate",
    async execute(client, role) {
        client.channels.cache.get(assets.channels.logistics.modificationlogs[0]).send(role)
    }
};