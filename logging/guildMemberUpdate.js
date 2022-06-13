const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "guildMemberUpdate",
    description: "the core logging for guildMemberUpdate",
    async execute(client, member) {
        console.log(member)
    }
};