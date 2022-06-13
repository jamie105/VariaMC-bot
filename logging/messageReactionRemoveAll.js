const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "messageReactionRemoveAll",
    description: "the core logging for messageReactionRemoveAll",
    async execute(client, reaction) {
        console.log(reaction)
    }
};