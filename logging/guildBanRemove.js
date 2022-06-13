const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "guildBanRemove",
    description: "the core logging for guildBanRemove",
    async execute(client, ban) {
        console.log(ban)
    }
};