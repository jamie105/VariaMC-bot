const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "guildMemberRemove",
    description: "the core logging for guildMemberRemove",
    async execute(client, member) {
        console.log(member)
    }
};