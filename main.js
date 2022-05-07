const Discord = require('discord.js')
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
const token = 'OTcyNTA2MDc3MzIzMjE5MDQ0.YnaC3Q.RxwynOuIOHzqP5zrBm-zFXpfn8M'

client.once('ready', () => {
    console.log('Helpy is online!');
});

client.login(token)

/* Help messages */
const helpyMessages = ['Your personal assistant!',]
client.on('message', message => {
    if(message.content.toLowerCase() === '?hy help') {
        message.channel.send(`Hello ${message.author}! I'm Helpy! Format commands with the prefix '?hy'\n
        Help - Responds with list of commands\n
        Kanye - Responds with a random Kanye Tweet`)
    }
})

const kanyeQuotes = [`"I hate when I'm on a flight and I wake up with a water bottle next to me like oh great now I gotta be responsible for this water bottle" -Kanye, 1/17/16`,
`"I need a room full of mirrors so I can be surrounded by winners." -Kanye 10/31/14`,
 `"When I sneeze, I bless myself." -Kanye 11/09/14`,
 `"I'm not even gon lie to you. I love me so much right now." -Kanye 2/26/22`]

client.on('message', message => {
    if(message.content.toLowerCase() === '?hy kanye') {
        message.channel.send(generateNewQuote)
        function generateNewQuote() {
            let randomNumber = Math.floor(Math.random() * kanyeQuotes.length)
            return kanyeQuotes[randomNumber]
        }
    }
})  
