const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "guildUpdate",
    description: "the core logging for guildUpdate",
    async execute(client, guild) {
        console.log(guild)
    }
};