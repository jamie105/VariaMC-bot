const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "guildMemberRemove",
    description: "the core logging for guildMemberRemove",
    async execute(client, member) {
        client.channels.cache.get(assets.channels.logistics.misclogs[0]).send(member)
    }
};