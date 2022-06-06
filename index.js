const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity("INITIAL DEVELOPMENT", {
        type: "STREAMING",
        url: "https://www.twitch.tv/variamc"
    });
})

client.login('OTgzMjYwNTMwMDExNjkzMDU2.GpqLue.Q4vTBEfQgwbf5u4ssqgLjpANXZuaZd3ql8GWio')
