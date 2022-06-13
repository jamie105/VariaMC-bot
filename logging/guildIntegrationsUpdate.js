const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "guildIntegrationsUpdate",
    description: "the core logging for guildIntegrationsUpdate",
    async execute(client, guild) {
        console.log(guild)
    }
};