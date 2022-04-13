const Discord = require('discord.js');
var game = require('./generate.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

client.once('ready', () => {
    console.log('bot online');
})

client.on('messageCreate', (message) => {
    if(message.content === 'ping'){
        message.reply({
            content: 'ping捏妈呢',
        })
    }
    else if(message.content === '/play'){
        var people_count = 0;
        //if (!message.member.voice.channel){return message.channel.send(client.msg["music_channel_undefined"])}
        message.member.voice.channel.members.each(member=>{
            member.send('hi');
            people_count = message.member.voice.channel.members.size;
        })
        if (people_count < 6){
            message.reply('当前语音频道人数不够');
            return;
        }
        var g = new game(people_count - 1);
        g.play();
        var memberlist = [];
        var memberlistidentity = [];
        var tracenumber = 0;
        var shangdi = message.member;
        //trace array
        for (const element of g.arr) {
            console.log(element.cname);
        }
        message.member.voice.channel.members.each(member => {
            memberlist.push(member.user.tag);
            memberlistidentity.push(g.arr[tracenumber].cname);
            member.send(g.arr[tracenumber].text);
            if (g.arr[tracenumber].name === 'Observer'){
                shangdi = member;
            }
            tracenumber++;
        })
        for (let i = 0; i < people_count; ++i){
            shangdi.send(memberlist[i] + ' is ' + memberlistidentity[i]);
        }
    }
})

client.login('OTYzNTk1MTE1ODIwMDg5Mzk0.YlYX4g.ZeAmAzNsktiE50__YLd7mvMoIu8')