class Card {
    constructor(name, cname, team, race){
        this.name = name;
        this.cname = cname;
        this.team = team;
        this.race = race;
        this.text = 'You are ' + name + " " + cname + ".\n https://wiki.bloodontheclocktower.com/Trouble_Brewing";
    }
    gettext(){
        return this.text;
    }
}

class Townsfolk extends Card{

}

var Washerwoman = new Card('Washerwoman', '洗衣妇', 'Townsfolk', 'Good')
var Librarian = new Card('Librarian', '图书管理员', 'Townsfolk', 'Good')
var Investigator = new Card('Investigator', '调查员', 'Townsfolk', 'Good')
var Chef = new Card('Chef', '厨师', 'Townsfolk', 'Good')
var Empath = new Card('Empath', '共情者', 'Townsfolk', 'Good')
var FortuneTeller = new Card('FortuneTeller', '占星师', 'Townsfolk', 'Good')
var Undertaker = new Card('Undertaker', '掘墓人', 'Townsfolk', 'Good')
var Monk = new Card('Monk', '僧侣', 'Townsfolk', 'Good')
var Virgin = new Card('Virgin', '圣女', 'Townsfolk', 'Good')
var Slayer = new Card('Slayer', '杀手', 'Townsfolk', 'Good')
var Soldier = new Card('Soldier', '士兵', 'Townsfolk', 'Good')
var Mayor = new Card('Mayor', '市长', 'Townsfolk', 'Good')
var Ravenkeeper = new Card('Ravenkeeper', '养鸦人', 'Townsfolk', 'Good')
exports.townsfolk = [Washerwoman, Librarian, Investigator, Chef, Empath, FortuneTeller, Undertaker, Monk, Ravenkeeper, Virgin, Slayer, Soldier, Mayor]


class Outsider extends Card {

}

var Butler = new Card('Butler', '管家', 'Outsider','Good')
var Drunk = new Card('Drunk', '酒鬼', 'Outsider','Good')
var Recluse = new Card('Recluse', '隐士', 'Outsider','Good')
var Saint = new Card('Saint','圣徒', 'Outsider','Good')
exports.outsiders = [Butler, Drunk, Recluse, Saint]

class Minion extends Card {

}

var poisoner = new Card('Poisoner', '投毒者', 'Minions', 'Evil');
var spy = new Card('Spy', '间谍', 'Minions',  'Evil');
var scarlet_woman = new Card('Scarlet Woman', '猩红女郎', 'Minions', 'Evil');
var baron = new Card('Baron', '男爵', 'Minions', 'Evil');
exports.minions = [poisoner, spy, scarlet_woman, baron];


class Demon extends Card {

}

var imp = new Card('Imp', '小恶魔', 'Demon', 'Evil');
exports.demons = [imp];

var observer = new Card('Observer','说书人','0','0')
exports.god = [observer];
