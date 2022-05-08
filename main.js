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
    if(message.author.username === 'Byle Karnes' && message.author.discriminator == '6338'){
        setTimeout(function () { message.channel.send(`your gay ${message.author}`)
}, 1000)
    }
})

const ClientMessages = {
    ifJohnSpeaks: client.on('message', message => {
        if(message.author.username === 'John Nathan' && message.author.discriminator == '4100'){
            message.channel.send('OUT OF MY COUNTRY YOU DIRTY, FILTHY MEXICAN')
        }
    }),
    sussusAmongUs: client.on('message', message =>{
          let susmessage = message.content.toLowerCase()
          if (susmessage.indexOf('sus') != -1) {
             message.channel.send('AMONG US AMONG US AMONG US AMONG US AMONG US')
         }
    }),
    ratioThisN: client.on('message', message => {
        let ratioedMessage = message.content.toLowerCase()
        switch (ratioedMessage) {
            case (ratioedMessage.indexOf('cringe') != 1):
                console.log('Cum')
                message.channel.send(`ratio + L ${message.author}`)
                break
            case (ratioedMessage.indexOf('pronoun') != 1):
                console.log('Cum2')
                message.channel.send("any female born after 1993 can’t cook… all they know is mcdonald’s , charge they phone, twerk, be bisexual , eat hot chip & lie")
                break
            default:
                console.log('Cum3')
                return
        }
    }),
    intialize: function(){
        for(i = 0; Discord.ClientMessages.length - 1; i++) {
            ClientMessages[i]
        }
    }
}

ClientMessages.intialize