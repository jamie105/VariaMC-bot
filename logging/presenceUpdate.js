const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "presenceUpdate",
    description: "the core logging for presenceUpdate",
    async execute(client, presence) {
        console.log(presence)
    }
};