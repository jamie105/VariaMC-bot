const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "messageReactionRemove",
    description: "the core logging for messageReactionRemove",
    async execute(client, reaction) {
        console.log(reaction)
    }
};