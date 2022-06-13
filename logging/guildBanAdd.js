const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "guildBanAdd",
    description: "the core logging for guildBanAdd",
    async execute(client, ban) {
        console.log(ban)
    }
};