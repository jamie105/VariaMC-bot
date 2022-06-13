const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "threadCreate",
    description: "the core logging for threadCreate",
    async execute(client, thread) {
        console.log(thread)
    }
};