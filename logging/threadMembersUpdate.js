const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "threadMembersUpdate",
    description: "the core logging for threadMembersUpdate",
    async execute(client, thread) {
        console.log(thread)
    }
};