const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "inviteDelete",
    description: "the core logging for inviteDelete",
    async execute(client, invite) {
        client.channels.cache.get(assets.channels.logistics.misclogs[0]).send(invite)
    }
};