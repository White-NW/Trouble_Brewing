import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES
  ]  
})

client.on('ready',() => {
    console.log('bot r')
})

client.on('messageCreate', (message) => {
    if(message.content === 'ping'){
        message.reply({
            content: 'pang',
        })
    }
    else if(message.content === 'check'){
        if(message.member)
        if(message.member.voice.channel)
        message.member.voice.channel.members.each(member=>{
       member.send('hi');
    })
    }
})

client.login(process.env.TOKEN)