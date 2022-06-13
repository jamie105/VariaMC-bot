const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "stageInstanceDelete",
    description: "the core logging for stageInstanceDelete",
    async execute(client, stage) {
        console.log(stage)
    }
};