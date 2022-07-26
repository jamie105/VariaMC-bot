const Discord = require("discord.js");
const assets = require("../config/assets.json");
const Canvas = require('canvas');

module.exports = {
    name: 'verify',
    description: 'Verification Command',
    async execute(message, args, client) {
        if (!message.member.roles.cache.some(role => role.id === assets.roles.special.Player[0])) {
            const verify = assets.characters[parseInt(Math.floor(Math.random() * assets.characters.length))] + "" + assets.characters[parseInt(Math.floor(Math.random() * assets.characters.length))] + "" + assets.characters[parseInt(Math.floor(Math.random() * assets.characters.length))] + "" + assets.characters[parseInt(Math.floor(Math.random() * assets.characters.length))] + "" + assets.characters[parseInt(Math.floor(Math.random() * assets.characters.length))] + "" + assets.characters[parseInt(Math.floor(Math.random() * assets.characters.length))] + "" + assets.characters[parseInt(Math.floor(Math.random() * assets.characters.length))] + "" + assets.characters[parseInt(Math.floor(Math.random() * assets.characters.length))] + "" + assets.characters[parseInt(Math.floor(Math.random() * assets.characters.length))] + "" + assets.characters[parseInt(Math.floor(Math.random() * assets.characters.length))];
            const canvas = Canvas.createCanvas(688, 288);
            const context = canvas.getContext('2d');
            const background = await Canvas.loadImage('./verifybackground.png');
            context.drawImage(background, 0, 0, canvas.width, canvas.height);
            context.textAlign = "center";
            context.textBaseline = 'middle';
            context.font = '110px Times New Roman';
            context.fillStyle = '#ffffff';
            context.fillText(verify, canvas.width / 2, canvas.height / 2);
            const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
            message.channel.send("<@" + message.author.id + "> Please Type The Code Below, You Have 60 Seconds.", attachment).then(() => {
                const filter = m => message.author.id === m.author.id;
                message.channel.awaitMessages(filter, { time: 60000, max: 1, errors: ['time'] })
                    .then(messages => {
                        if (messages.first().content === verify) {
                            message.member.roles.add(message.guild.roles.cache.find(role => role.id === assets.roles.special.Player[0]));
                            message.channel.send("User Verified.")
                        } else {
                            message.channel.send("Incorrect Code. Please Type `!verify` And Try Again!");
                        }
                    })
                    .catch((e) => {
                        message.channel.send('You did not enter any input, please retype `!verify` and try again.');
                        console.log(e)
                    });
            });
        } else {
            message.reply("You have already been verfied.")
        }
    }
};