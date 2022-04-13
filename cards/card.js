
class card {
    constructor(name, team, race, description){
        this.name = name;
        this.team = team;
        this.race = race;
        this.description=description;
        this.send = 'You are ' + name + ".\n" + description;
    }
}

