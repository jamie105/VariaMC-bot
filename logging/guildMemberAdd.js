const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "guildMemberAdd",
    description: "the core logging for guildMemberAdd",
    async execute(client, member) {
        client.channels.cache.get(assets.channels.logistics.misclogs[0]).send("```json" + JSON.stringify(member) + "```")
    }
};