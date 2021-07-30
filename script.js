const generateRandomNumber = num => {
    return Math.floor(Math.random()* num);
}

const nbaGenerator = {
    teams: ['Suns', 'Lakers', 'Bucks', 'Nets', 'Warriors', 'Clippers' ],
    games: [4, 5, 6, 7],
    arena: ['Home', 'Away']

}

let nbaWinner = [];

for(let team in nbaGenerator){
    let index = generateRandomNumber(nbaGenerator[team].length);

switch(team){
    case 'teams' :
        nbaWinner.push(`The team that is winning the NBA finals is the ${nbaGenerator[team][index]}.`);
        break
    case 'games' :
        nbaWinner.push(`They will win in ${nbaGenerator[team][index]} games. `);
        break
    case 'arena' :
        if(nbaGenerator[team][index] === 'home'){
        
            nbaWinner.push(`They will win at ${nbaGenerator[team][index]}.`);
        break
    } 
        else {
            nbaWinner.push(`They will win at the ${nbaGenerator[team][index]} arena.`)
            break
        }
    default :
    nbaWinner.push(`Whatever team Cam Payne is on will win.`);
}

}

function silversSecretPlan(winner){
    const format = nbaWinner.join('\n')
    console.log(format);
}

silversSecretPlan(nbaGenerator);