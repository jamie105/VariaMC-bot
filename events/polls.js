const Discord = require("discord.js");
const assets = require("../config/assets.json");

module.exports = {
	name: "polls",
	description: "the core for polls reacts",
	async execute(client, message) {
		for(let i=0;i<assets.emojis.length;i++){
			if(message.content.includes(assets.emojis[i])){
				message.react(assets.emojis[i])
			}
		}
	}
};
