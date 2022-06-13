const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "voiceStateUpdate",
    description: "the core logging for voiceStateUpdate",
    async execute(client, voice) {
        console.log(voice)
    }
};