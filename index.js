//General
const Discord = require('discord.js');
const fetch = require("node-fetch")
const client = new Discord.Client();
const cooldowns = new Discord.Collection();
const fs = require('fs');
const stopPhishing = require('stop-discord-phishing')

//config files
client.assets = require('./config/assets.json')

//SpecificVariables
const prefix = client.assets.prefix

//Setup Collections For Organisation Files
client.constants = new Discord.Collection();
client.commands = new Discord.Collection();
client.database = new Discord.Collection();
client.logging = new Discord.Collection();
client.events = new Discord.Collection();
client.vanix = new Discord.Collection();

//Find Organisation Files
const constantFiles = fs.readdirSync('./constants').filter(file => file.endsWith('.js'));
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const databasesFiles = fs.readdirSync('./database').filter(file => file.endsWith('.js'));
const loggingsFiles = fs.readdirSync('./logging').filter(file => file.endsWith('.js'));
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const vanixsFiles = fs.readdirSync('./vanix').filter(file => file.endsWith('.js'));
console.log(vanixsFiles)

for (const file of constantFiles) {
    const constant = require(`./constants/${file}`);
    client.constants.set(constant.name, constant);
}
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}
for (const file of databasesFiles) {
    const databases = require(`./database/${file}`);
    client.database.set(databases.name, databases);
}
for (const file of loggingsFiles) {
    const loggings = require(`./logging/${file}`);
    client.logging.set(loggings.name, loggings);
}
for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    client.events.set(event.name, event);
}
for (const file of vanixsFiles) {
    const vanixs = require(`./vanix/${file}`);
    client.vanix.set(vanixs.name, vanixs);
    console.log(vanixs.name)
}


client.once('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`);
    /**setInterval(function(){
        for (const x in client.constants){
		    console.log(x)
	    }
	},5000);**/
    client.user.setActivity("variamc.net", {
        type: "STREAMING",
        url: "https://www.twitch.tv/variamc"
    });
})

console.log(client.vanix.get("main"))

client.on('message', async message => {
    if(message.author.bot){return}
    if(message.channel.id===client.assets.channels.specific.vanix){
		return client.vanix.get("main").execute(client, message)
    }
    if (message.channel.id === client.assets.channels.specific.polls) {
        return client.events.get("polls").execute(client, message)
    }
    if(!message.content.startsWith(prefix)){return}
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    if (!command) {} else {
        if (!cooldowns.has(command.name)) {
            cooldowns.set(command.name, new Discord.Collection());
        }
        const now = Date.now();
        const timestamps = cooldowns.get(command.name);
        const cooldownAmount = (command.cooldown || 3) * 1000;
        if (timestamps.has(message.author.id)) {
            const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
            if (now < expirationTime) {
                const timeLeft = (expirationTime - now) / 1000;
                message.channel.bulkDelete(1)
                    .then(async () => {
                        var noargs = {
                            'title': '__**Command Cooldown**__',
                            'description': 'Incorrect Command Usage',
                            'color': 16711712,
                            'footer': {
                                'icon_url': 'https://cdn.discordapp.com/avatars/759867790416019497/c440976d3f1a5da5c62aaa3151aeb1e7.webp?size=32',
                                'text': 'GalacticLands - //help'
                            },
                            'author': {
                                'name': 'GalacticLands',
                                'icon_url': 'https://cdn.discordapp.com/avatars/759867790416019497/c440976d3f1a5da5c62aaa3151aeb1e7.webp?size=32'
                            },
                            'fields': [{
                                'name': 'Command',
                                'value': '`/' + `${command.name}` + '`',
                                'inline': false
                            }, {
                                'name': 'Time Remaining',
                                'value': '`' + `${timeLeft.toFixed(1)}` + ' second(s)`',
                                'inline': false
                            }]
                        };
                        let response = await message.channel.send({
                            embed: noargs
                        })
                        response.delete({
                            timeout: 5000
                        })
                    });
                return;
            }
        }
        timestamps.set(message.author.id, now);
        setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
        try {
            command.execute(message, args, client);
        } catch (error) {
            console.error(error);
            message.reply('Error, please report');
        }
    }
})
/**
client.on('channelCreate', async channel => {
    client.logging.get('channelCreate').execute(client, channel)
})


client.on('channelDelete', async channel => {
    client.logging.get('channelDelete').execute(client, channel)
})


client.on('channelUpdate', async channel => {
    client.logging.get('channelUpdate').execute(client, channel)
})


client.on('channelPinsUpdate', async channel => {
    client.logging.get('channelPinsUpdate').execute(client, channel)
})


client.on('emojiCreate', async emoji => {
    client.logging.get('emojiCreate').execute(client, emoji)
})


client.on('emojiDelete', async emoji => {
    client.logging.get('emojiDelete').execute(client, emoji)
})


client.on('emojiUpdate', async emoji => {
    client.logging.get('emojiUpdate').execute(client, emoji)
})


client.on('guildBanAdd', async ban => {
    client.logging.get('guildBanAdd').execute(client, ban)
})


client.on('guildBanRemove', async ban => {
    client.logging.get('guildBanRemove').execute(client, ban)
})


client.on('guildIntegrationsUpdate', async guild => {
    client.logging.get('guildIntegrationsUpdate').execute(client, guild)
})


client.on('guildMemberAdd', async member => {
    client.logging.get('guildMemberAdd').execute(client, member)
})


client.on('guildMemberRemove', async member => {
    client.logging.get('guildMemberRemove').execute(client, member)
})


client.on('guildMemberUpdate', async member => {
    client.logging.get('guildMemberUpdate').execute(client, member)
})


client.on('guildUpdate', async guild => {
    client.logging.get('guildUpdate').execute(client, guild)
})


client.on('inviteCreate', async invite => {
    client.logging.get('inviteCreate').execute(client, invite)
})


client.on('inviteDelete', async invite => {
    client.logging.get('inviteDelete').execute(client, invite)
})


client.on('messageCreate', async message => {
    client.logging.get('messageCreate').execute(client, message)
})


client.on('messageDelete', async message => {
    client.logging.get('messageDelete').execute(client, message)
})


client.on('messageDeleteBulk', async message => {
    client.logging.get('messageDeleteBulk').execute(client, message)
})


client.on('messageReactionRemoveAll', async reaction => {
    client.logging.get('messageReactionRemoveAll').execute(client, reaction)
})


client.on('messageReactionRemoveEmoji', async reaction => {
    client.logging.get('messageReactionRemoveEmoji').execute(client, reaction)
})


client.on('messageReactionAdd', async reaction => {
    client.logging.get('messageReactionAdd').execute(client, reaction)
})


client.on('messageReactionRemove', async reaction => {
    client.logging.get('messageReactionRemove').execute(client, reaction)
})


client.on('messageUpdate', async message => {
    client.logging.get('messageUpdate').execute(client, message)
})


client.on('presenceUpdate', async presence => {
    client.logging.get('presenceUpdate').execute(client, presence)
})


client.on('rateLimit', async rate => {
    client.logging.get('rateLimit').execute(client, rate)
})


client.on('roleCreate', async role => {
    client.logging.get('roleCreate').execute(client, role)
})


client.on('roleDelete', async role => {
    client.logging.get('roleDelete').execute(client, role)
})


client.on('roleUpdate', async role => {
    client.logging.get('roleUpdate').execute(client, role)
})


client.on('threadCreate', async thread => {
    client.logging.get('threadCreate').execute(client, thread)
})


client.on('threadDelete', async thread => {
    client.logging.get('threadDelete').execute(client, thread)
})


client.on('threadListSync', async thread => {
    client.logging.get('threadListSync').execute(client, thread)
})


client.on('threadMemberUpdate', async thread => {
    client.logging.get('threadMemberUpdate').execute(client, thread)
})


client.on('threadMembersUpdate', async thread => {
    client.logging.get('threadMembersUpdate').execute(client, thread)
})


client.on('threadUpdate', async thread => {
    client.logging.get('threadUpdate').execute(client, thread)
})


client.on('typingStart', async typing => {
    client.logging.get('typingStart').execute(client, typing)
})


client.on('userUpdate', async user => {
    client.logging.get('userUpdate').execute(client, user)
})


client.on('voiceStateUpdate', async voice => {
    client.logging.get('voiceStateUpdate').execute(client, voice)
})


client.on('webhookUpdate', async webhook => {
    client.logging.get('webhookUpdate').execute(client, webhook)
})


client.on('stageInstanceCreate', async stage => {
    client.logging.get('stageInstanceCreate').execute(client, stage)
})


client.on('stageInstanceUpdate', async stage => {
    client.logging.get('stageInstanceUpdate').execute(client, stage)
})


client.on('stageInstanceDelete', async stage => {
    client.logging.get('stageInstanceDelete').execute(client, stage)
})


client.on('stickerCreate', async sticker => {
    client.logging.get('stickerCreate').execute(client, sticker)
})


client.on('stickerDelete', async sticker => {
    client.logging.get('stickerDelete').execute(client, sticker)
})


client.on('stickerUpdate', async sticker => {
    client.logging.get('stickerUpdate').execute(client, sticker)
})
**/


client.login('OTgzMjYwNTMwMDExNjkzMDU2.GpqLue.Q4vTBEfQgwbf5u4ssqgLjpANXZuaZd3ql8GWio')
