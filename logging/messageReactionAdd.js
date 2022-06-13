const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "messageReactionAdd",
    description: "the core logging for messageReactionAdd",
    async execute(client, reaction) {
        console.log(reaction)
    }
};