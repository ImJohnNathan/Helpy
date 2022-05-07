const Discord = require('discord.js')
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
const token = 'OTcyNTA2MDc3MzIzMjE5MDQ0.YnaC3Q.RxwynOuIOHzqP5zrBm-zFXpfn8M'

client.once('ready', () => {
    console.log('Helpy is online!');
});

client.login(token)

client.on('message', message => {
    if(message.content.toLowerCase() === '?help') {
        message.channel.send(`Hello ${message.author}! I'm helpy!`)
    }
})