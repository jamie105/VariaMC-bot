const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "threadMemberUpdate",
    description: "the core logging for threadMemberUpdate",
    async execute(client, thread) {
        console.log(thread)
    }
};