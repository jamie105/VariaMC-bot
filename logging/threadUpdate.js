const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "threadUpdate",
    description: "the core logging for threadUpdate",
    async execute(client, thread) {
        console.log(thread)
    }
};