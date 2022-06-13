const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "stageInstanceUpdate",
    description: "the core logging for stageInstanceUpdate",
    async execute(client, stage) {
        console.log(stage)
    }
};