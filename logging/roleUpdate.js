const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "roleUpdate",
    description: "the core logging for roleUpdate",
    async execute(client, role) {
        client.channels.cache.get(assets.channels.logistics.modificationlogs[0]).send(role)
    }
};