const Discord = require('discord.js')

const client = new Discord.Client()

client.once('ready', () => {
    console.log('Helpy is online!');
});

client.login('OTcyNTA2MDc3MzIzMjE5MDQ0.YnaC3Q.RxwynOuIOHzqP5zrBm-zFXpfn8M')