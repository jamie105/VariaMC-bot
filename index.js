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
    if(message.author.bot){return}
    
})

client.on('channelCreate', async channel => {
    console.log(channel)
})


client.on('channelDelete', async channel => {
    console.log(channel)
})


client.on('channelUpdate', async channel => {
    console.log(channel)
})


client.on('channelPinsUpdate', async channel => {
    console.log(channel)
})


client.on('emojiCreate', async emoji => {
    console.log(emoji)
})


client.on('emojiDelete', async emoji => {
    console.log(emoji)
})


client.on('emojiUpdate', async emoji => {
    console.log(emoji)
})


client.on('guildBanAdd', async ban => {
    console.log(ban)
})


client.on('guildBanRemove', async ban => {
    console.log(ban)
})


client.on('guildIntegrationsUpdate', async guild => {
    console.log(guild)
})


client.on('guildMemberAdd', async member => {
    console.log(member)
})


client.on('guildMemberRemove', async member => {
    console.log(member)
})


client.on('guildMemberUpdate', async member => {
    console.log(member)
})


client.on('guildUpdate', async guild => {
    console.log(guild)
})


client.on('inviteCreate', async invite => {
    console.log(invite)
})


client.on('inviteDelete', async invite => {
    console.log(invite)
})


client.on('messageCreate', async message => {
    console.log(message)
})


client.on('messageDelete', async message => {
    console.log(message)
})


client.on('messageDeleteBulk', async message => {
    console.log(message)
})


client.on('messageReactionRemoveAll', async reaction => {
    console.log(reaction)
})


client.on('messageReactionRemoveEmoji', async reaction => {
    console.log(reaction)
})


client.on('messageReactionAdd', async reaction => {
    console.log(reaction)
})


client.on('messageReactionRemove', async reaction => {
    console.log(reaction)
})


client.on('messageUpdate', async message => {
    console.log(message)
})


client.on('presenceUpdate', async presence => {
    console.log(presence)
})


client.on('rateLimit', async rate => {
    console.log(rate)
})


client.on('roleCreate', async role => {
    console.log(role)
})


client.on('roleDelete', async role => {
    console.log(role)
})


client.on('roleUpdate', async role => {
    console.log(role)
})


client.on('threadCreate', async thread => {
    console.log(thread)
})


client.on('threadDelete', async thread => {
    console.log(thread)
})


client.on('threadListSync', async thread => {
    console.log(thread)
})


client.on('threadMemberUpdate', async thread => {
    console.log(thread)
})


client.on('threadMembersUpdate', async thread => {
    console.log(thread)
})


client.on('threadUpdate', async thread => {
    console.log(thread)
})


client.on('typingStart', async typing => {
    console.log(typing)
})


client.on('userUpdate', async user => {
    console.log(user)
})


client.on('voiceStateUpdate', async voice => {
    console.log(voice)
})


client.on('webhookUpdate', async webhook => {
    console.log(webhook)
})


client.on('stageInstanceCreate', async stage => {
    console.log(stage)
})


client.on('stageInstanceUpdate', async stage => {
    console.log(stage)
})


client.on('stageInstanceDelete', async stage => {
    console.log(stage)
})


client.on('stickerCreate', async sticker => {
    console.log(sticker)
})


client.on('stickerDelete', async sticker => {
    console.log(sticker)
})


client.on('stickerUpdate', async sticker => {
    console.log(sticker)
})



client.login('OTgzMjYwNTMwMDExNjkzMDU2.GpqLue.Q4vTBEfQgwbf5u4ssqgLjpANXZuaZd3ql8GWio')
