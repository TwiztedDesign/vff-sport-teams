const teamsData = require('./teams');

function convertNameToId(name) {
    return name.replace(/\s+/g, '-').toLowerCase();
}

class Team {
    constructor(details){
        Object.assign(this, details);
        this.id = convertNameToId(this.name);
    }

    getName() {return this.name;}
    getAbbreviation() {return this.abbreviation;}
    getLeague() {return this.league;}
    getColors() {
        let colors = this.colors;
        if(colors) return colors.hex || colors.rgb || colors.cymk || colors.pms;
    }
    getLogo(){
        return require(`./img/${this.getLeague().toLowerCase()}/${this.id}.svg`);
    }
}


let teams = teamsData.map(team => new Team(team));


window.vff.extend('sportteams', {
    all : () => teams,
    league : (league) => {
        return teams.reduce((arr, team) => {
            if(team.league && team.league.toLowerCase() === league.toLowerCase()){
                arr.push(team);
            }
            return arr;
        }, []);
    },
    team : (name, league) => {
        let found;
        teams.forEach(team => {
            if(name && team.getName().toLowerCase() === name.toLowerCase() && (!league || league.toLowerCase() === team.getLeague().toLowerCase())){
                found = team;
                return found;
            }
        });
        return found;
    }
});

