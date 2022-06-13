const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "userUpdate",
    description: "the core logging for userUpdate",
    async execute(client, user) {
        console.log(user)
    }
};