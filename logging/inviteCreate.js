const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "inviteCreate",
    description: "the core logging for inviteCreate",
    async execute(client, invite) {
        client.channels.cache.get(assets.channels.logistics.misclogs[0]).send("```json" + JSON.stringify(invite) + "```")
    }
};