const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "userUpdate",
    description: "the core logging for userUpdate",
    async execute(client, user) {
        client.channels.cache.get(assets.channels.logistics.misclogs[0]).send(user)
    }
};