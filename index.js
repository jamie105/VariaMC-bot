const Discord = require('discord.js');
const fetch = require("node-fetch")
const client = new Discord.Client();
const cooldowns = new Discord.Collection();
const fs = require('fs');

//Setup Collections For Organisation Files
client.commands = new Discord.Collection();
client.constants = new Discord.Collection();


//Find Organisation Files
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}
const loggingFiles = fs.readdirSync('./logging').filter(file => file.endsWith('.js'));
for (const file of loggingFiles) {
    const logging = require(`./logging/${file}`);
    client.logging.set(logging.name, logging);
}

client.once('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity("INITIAL DEVELOPMENT", {
        type: "STREAMING",
        url: "https://www.twitch.tv/variamc"
    });
})

client.on('message', async message => {
    if(message.author.bot){return}
    
})

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



client.login('OTgzMjYwNTMwMDExNjkzMDU2.GpqLue.Q4vTBEfQgwbf5u4ssqgLjpANXZuaZd3ql8GWio')
