const Discord = require('discord.js');
const fetch = require("node-fetch")
const client = new Discord.Client();

client.once('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity("INITIAL DEVELOPMENT", {
        type: "STREAMING",
        url: "https://www.twitch.tv/variamc"
    });
})

client.on('message', async message => {
    console.log(message.content)
    if(message.content.startsWith('<@983260530011693056>') && !message.author.bot){
        console.log('chatbot')
        let json = await fetch("https://api.affiliateplus.xyz/api/chatbot?message="+message.content.replace('<@983260530011693056>','')+"&name=Vanix&user=" + message.author.id + "variamcbot")
        let chat = await json.json()
        let messagemain = chat.message.replaceAll('@everyone','#everyone').replaceAll('@here','#here')
        message.reply(messagemain)
    }
})

client.login('OTgzMjYwNTMwMDExNjkzMDU2.GpqLue.Q4vTBEfQgwbf5u4ssqgLjpANXZuaZd3ql8GWio')
