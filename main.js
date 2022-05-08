const Discord = require('discord.js')
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
const token = 'OTcyNTA2MDc3MzIzMjE5MDQ0.YnaC3Q.RxwynOuIOHzqP5zrBm-zFXpfn8M'



client.once('ready', () => {
    console.log('Helpy is online!');
    client.user.setPresence({
        status: "online",  //You can show online, idle....
        game: {
            name: "Use the prefix ?hy!",  //The message shown
            type: "STREAMING" //PLAYING: WATCHING: LISTENING: STREAMING:
        }
    });
});

client.login(token)

/* Help messages */
const helpyMessages = ['Your personal assistant!',]
client.on('message', message => {
    if(message.content.toLowerCase() === '?hy help') {
        message.channel.send(`Hello ${message.author}! I'm Helpy! Format commands with the prefix '?hy'\n
        **Help** - Responds with list of commands\n
        **Kanye** - Responds with a random Kanye Tweet\n
        **Kyle** - your gay`)
    }
})

const kanyeQuotes = [`"I hate when I'm on a flight and I wake up with a water bottle next to me like oh great now I gotta be responsible for this water bottle" -Kanye, 1/17/16`,
`"I need a room full of mirrors so I can be surrounded by winners." -Kanye 10/31/14`,
 `"When I sneeze, I bless myself." -Kanye 11/09/14`,
 `"I'm not even gon lie to you. I love me so much right now." -Kanye 2/26/22`]


client.on('message', message => {
    if(message.content.toLowerCase() === '?hy kanye') {
        message.channel.send(generateWord(kanyeQuotes))
        function generateWord(table) {
            if(typeof(table) == 'object') {
                return table[Math.floor(Math.random() * table.length)]
            }
        }
    }
})

client.on('message', message => {
    let susmessage = message.content.toLowerCase()
    if(susmessage.indexOf('sus') != -1) {
        message.channel.send('AMONG US AMONG US AMONG US AMONG US AMONG US')
    }
})

client.on('message', message => {
    switch(message.content.toLowerCase()) {
        case 'cringe': 
            message.channel.send(`ratio + L ${message.author}`)
        default:
            return
    }
})

client.on('message', message => {
    if(message.author.username === 'Byle Karnes' && message.author.discriminator == '6338'){
        setTimeout(function () { message.channel.send(`your gay ${message.author}`)
}, 10000)
    }
})

client.on('message', message => {
    if(message.content == 'computer: load gay butt sex'){
        message.channel.send('https://giphy.com/gifs/twerking-guy-twerk-yhVTV3hhdHJhm')
    }
})

client.on('message', message => {
    if(message.content.toLowerCase() == `?hy delete`) {
        
    }
})

client.on('message', message => {
    if(message.author.username === 'Byle Karnes'){
        if(message.content.toLowerCase().indexOf('fuck') != -1){
            message.channel.send('FUCK YOU TOO')
        } elseif(message.content.toLowerCase().indexOf('shit') != -1);{
            message.channel.send('KILL YOURSELF BABOON')
        }
    }
})