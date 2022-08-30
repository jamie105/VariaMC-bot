const Discord = require("discord.js");
const assets = require("../config/assets.json");
const Canvas = require('canvas');
const Rcon = require('modern-rcon');
const rcon = new Rcon('51.81.146.97', port = 19132, '/X010YWRCoE=');

module.exports = {
    name: 'link',
    description: 'Link Command',
    async execute(message, args, client) {
		
        if (!message.member.roles.cache.some(role => role.id === assets.roles.special.Linked[0])) {
            if(!args[0]){
				return message.channel.send("Please supply an IGN `!link (ign)`")
			}
            const code = assets.characters[parseInt(Math.floor(Math.random() * assets.characters.length))] + "" + assets.characters[parseInt(Math.floor(Math.random() * assets.characters.length))] + "" + assets.characters[parseInt(Math.floor(Math.random() * assets.characters.length))] + "" + assets.characters[parseInt(Math.floor(Math.random() * assets.characters.length))] + "" + assets.characters[parseInt(Math.floor(Math.random() * assets.characters.length))] + "" + assets.characters[parseInt(Math.floor(Math.random() * assets.characters.length))] + "" + assets.characters[parseInt(Math.floor(Math.random() * assets.characters.length))] + "" + assets.characters[parseInt(Math.floor(Math.random() * assets.characters.length))] + "" + assets.characters[parseInt(Math.floor(Math.random() * assets.characters.length))] + "" + assets.characters[parseInt(Math.floor(Math.random() * assets.characters.length))];
			var notfound = "";
			await rcon.connect().then(() => {
				return rcon.send("tell "+args[0]+" Here is your code: "+code+" Please enter it into discord."); // That's a command for Minecraft
			}).then(res => {
				notfound = res;
			}).then(() => {
				return rcon.disconnect();
			});
			
			if(notfound.includes("cannot be found")){
				return message.channel.send("The user "+args[0]+" could not be found, please make sure you supplied an ign that is online in the Lobby")
			}
            
            message.channel.send("A code has been sent to `"+args[0]+"` on the Lobby server, please enter the code. You have **5 minutes**").then(() => {
                const filter = m => message.author.id === m.author.id;
                message.channel.awaitMessages(filter, { time: 300000, max: 1, errors: ['time'] })
                    .then(messages => {
                        if (messages.first().content === code) {
                            message.member.roles.add(message.guild.roles.cache.find(role => role.id === assets.roles.special.Linked[0]));
                            message.channel.send("User Linked")
                            client.channels.cache.get('1014165349815549982').send(message.author.id + ":" + args[0])
                        } else {
                            message.channel.send("Incorrect Code. Please Type `!link (ign)` And Try Again!");
                        }
                    })
                    .catch((e) => {
                        message.channel.send('You did not enter any input, please retype `!link (ign)` and try again.');
                        console.log(e)
                    });
            });
        } else {
            message.reply("You have already been verfied.")
        }
    }
};
