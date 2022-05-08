const Discord = require('discord.js');
var game = require('./generate.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
require("dotenv").config();

var token = process.env.CLIENT_TOKEN;

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}


client.once('ready', () => {
    console.log('bot online');
})

client.on('messageCreate', (message) => {
    if(message.content === 'ping'){
        message.reply({
            content: 'pong',
        })
    }
    else if(message.content === 'playclocktower'){
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
        shuffle(this.arr);

        var memberlist = [];
        var memberlistidentity = [];
        var tracenumber = 0;
        var shangdi = message.member;
        //trace array
        //for (const element of g.arr) {
        //    console.log(element.cname);
        //}
        message.member.voice.channel.members.each(member => {
            memberlist.push(member.user.tag);
            if (g.arr[tracenumber].drunkname === '')
                memberlistidentity.push(g.arr[tracenumber].cname);
            else
                memberlistidentity.push(g.arr[tracenumber].cname + ' ---> ' + g.arr[tracenumber].drunkcname);
            member.send(g.arr[tracenumber].gettext());
            //console.log(g.arr[tracenumber].text);
            //console.log(g.arr[tracenumber].gettext());
            if (g.arr[tracenumber].name === 'Observer'){
                shangdi = member;
            }
            tracenumber++;
        })
        for (let i = 0; i < people_count; ++i){
            shangdi.send(memberlist[i] + ' is ' + memberlistidentity[i]);
            //if (memberlistidentity[i] === '酒鬼'){
            //    shangdi.send(memberlist[i] + ' is known as' + memberlistidentity[i]);
            //}
        }
    }
    else if(message.content === 'obplayclocktower'){
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

        memberlist.push(message.member.user.tag);
        memberlistidentity.push(g.arr[g.arr.length - 1].cname);
        message.member.send(g.arr[g.arr.length - 1].gettext());
        tracenumber;
        g.arr.pop();
        shuffle(g.arr);
        //trace array
        //for (const element of g.arr) {
        //    console.log(element.cname);
        //}
        message.member.voice.channel.members.each(member => {
            if (member == message.member) return;
            memberlist.push(member.user.tag);
            if (g.arr[tracenumber].drunkname === '')
                memberlistidentity.push(g.arr[tracenumber].cname);
            else
                memberlistidentity.push(g.arr[tracenumber].cname + ' ---> ' + g.arr[tracenumber].drunkcname);
            member.send(g.arr[tracenumber].gettext());
            tracenumber++;
        })
        for (let i = 0; i < people_count; ++i){
            shangdi.send(memberlist[i] + ' is ' + memberlistidentity[i]);
        }
    }
})

client.login(token);