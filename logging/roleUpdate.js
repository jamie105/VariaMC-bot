const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "roleUpdate",
    description: "the core logging for roleUpdate",
    async execute(client, role) {
        console.log(role)
    }
};