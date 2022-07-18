const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
    name: "test",
    description: "the core logging for channelCreate",
    async execute(message,args,client) {
        message.channel.send("test a")
    }
};
