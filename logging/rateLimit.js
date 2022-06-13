const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "rateLimit",
    description: "the core logging for rateLimit",
    async execute(client, rate) {
        console.log(rate)
    }
};