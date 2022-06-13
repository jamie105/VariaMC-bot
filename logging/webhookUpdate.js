const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "webhookUpdate",
    description: "the core logging for webhookUpdate",
    async execute(client, webhook) {
        console.log(webhook)
    }
};