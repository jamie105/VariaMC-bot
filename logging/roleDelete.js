const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "roleDelete",
    description: "the core logging for roleDelete",
    async execute(client, role) {
        console.log(role)
    }
};