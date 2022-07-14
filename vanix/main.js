const Discord = require("discord.js");
const assets = require("../config/assets.json");
const fetch = require("node-fetch");
const chatcheck = require("./chatcheck.json")

module.exports = {
    name: "main",
    description: "the core for vanix",
    async execute(client, message) {
		if(!message.content.startsWith("<@983260530011693056>")){return}
		var modifiedmessage = message.content.replaceAll("<@983260530011693056>","")
		modifiedmessage = modifiedmessage.toLowerCase()
		//replace items in message
		for(const x in chatcheck.replace){
			if(modifiedmessage.includes(x)){
				modifiedmessage = modifiedmessage.replaceAll(x,chatcheck.replace[x])
			}
		}
		//Language barrier
		for(const x in chatcheck.language){
			if(modifiedmessage.includes(" "+x+" ")){
				modifiedmessage = modifiedmessage.replaceAll(x,chatcheck.language[x])
			}
		}
		//Manual override for answer
		for(const x in chatcheck.custom){
			if(modifiedmessage===x){
				return message.reply(chatcheck.custom[x])
			}
		}
		
        var json = await fetch("https://api.affiliateplus.xyz/api/chatbot?message="+modifiedmessage+"&name=Vanix&user=siryakstudioschatbot001"+message.author.id+"&botmaster=<@462554041440796674>&master=<@462554041440796674>")
		var chat = await json.json()
		message.reply(chat.message)
    }
};
