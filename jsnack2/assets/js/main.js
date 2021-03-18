// Creare un array di oggetti di squadre di calcio.
//  Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. 
//  Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. 
//  Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
//   Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
let output = document.getElementById("output")
const squadre = [{
        nome: "juventus",
        punti: 0,
        falli: 0
    },
    {
        nome: "milan",
        punti: 0,
        falli: 0
    },
    {
        nome: "inter",
        punti: 0,
        falli: 0
    },
    {
        nome: "roma",
        punti: 0,
        falli: 0
    },
    {
        nome: "lazio",
        punti: 0,
        falli: 0
    }
]
var falliSquadra = []
for (let i = 0; i < squadre.length; i++) {
    var { nome, punti, falli } = squadre[i]
    punti = randomNumber(1, 100)
    falli = randomNumber(1, 100)
    falliSquadra.push({ nome, falli })
    output.innerHTML += `${nome} ${falli} <br>`
}

console.log(falliSquadra);

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}