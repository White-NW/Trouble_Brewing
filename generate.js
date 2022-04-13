const cards = require("./card")

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

class game{

    constructor(people){
    this.people = parseInt(people);
    this.townsfolkcount = [0,0,0,0,0,3,3,5,5,5,7,7,7,9,9,9];
    this.outsidercount = [0,0,0,0,0,0,1,0,1,2,0,1,2,0,1,2];
    this.minioncount = [0,0,0,0,0,1,1,2,1,1,2,2,2,3,3,3];
    this.demoncount = [0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1];
    this.arr = [];
    }

    play() {
        console.log('-----------------------------------')
        var baron = 0;
        let i = 0;
        var temparr = [];

        while(temparr.length < this.minioncount[this.people]){
            var r = Math.floor(Math.random() * (cards.minions.length));
            if(temparr.indexOf(r) === -1) 
            temparr.push(r);
        }

        for(i = 0; i < this.minioncount[this.people]; ++i){
            var r = cards.minions[temparr[i]];
            this.arr.push(r);
            if (r.name === 'Baron'){
                this.outsidercount[this.people] += 2;
                this.townsfolkcount[this.people] -= 2;
            }
        }

        temparr = [];
        while(temparr.length < this.townsfolkcount[this.people]){
            var r = Math.floor(Math.random() * (cards.townsfolk.length));
            if(temparr.indexOf(r) === -1)
            temparr.push(r);
        }
        for(i = 0; i < this.townsfolkcount[this.people]; ++i){
            var r = cards.townsfolk[temparr[i]];
            this.arr.push(r);
        }

        temparr = [];
        while(temparr.length < 4){
            var r = Math.floor(Math.random() * (cards.outsiders.length));
            if(temparr.indexOf(r) === -1)
            temparr.push(r);
        }
        for(i = 0; i < this.outsidercount[this.people]; ++i){
            var r = cards.outsiders[temparr[i]];
            this.arr.push(r);
        }
        if (this.people >= 5){
            var r = cards.demons[0];
            this.arr.push(r);
        }
        this.arr.push(cards.god);
        shuffle(this.arr);
        //console.log(arr);
        //message.member.voice.channel.members.each(member=>{
        //member.send('1');
        //})
    }
}

module.exports = game;