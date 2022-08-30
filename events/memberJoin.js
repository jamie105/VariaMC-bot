const Discord = require("discord.js");
const assets = require("../config/assets.json");
const images = require("../config/images.json")
const Canvas = require('canvas');
const pixelWidth = require('string-pixel-width');

module.exports = {
	name: "memberJoin",
	description: "the core for members joining",
    async execute(client, member) {
        var usernamefs = 110;
        for (let i = 0; i < 111; i++) {
            if (pixelWidth(member.user.username, { font: 'times new roman', size: i }) < 490) {
                usernamefs = i;
            }

        }
        const canvas = Canvas.createCanvas(900, 400);
        const context = canvas.getContext('2d');
        const background = await Canvas.loadImage('./images/ranks/1/background.png');
        const foreground = await Canvas.loadImage('./images/ranks/1/welcome.png');
        const profile = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'png' }));
        context.drawImage(background, 20, 50, 852, 328);
        context.drawImage(profile, 73, 140, 150, 150);
        context.drawImage(foreground, 0, 0, canvas.width, canvas.height);
        context.textAlign = "center";
        context.textBaseline = 'middle';
        context.font = usernamefs + 'px Times New Roman';
        context.fillStyle = '#ffffff';
        context.fillText(member.user.username, '495', '280');
        context.font = '40px Times New Roman';
        context.fillText('#' + member.user.discriminator, '800', '348');
        context.font = '115px Times New Roman';
        context.fillText('WELCOME', '557', '118');
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
        client.channels.cache.get('994719500547133511').send("<@" + member.user.id + "> Welcome to VariaMC! Please enjoy your stay and let it be known that we now have "+ member.guild.memberCount +" members!", attachment)


	}
};
