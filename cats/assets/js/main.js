// Milestone 1
// Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.
// Tramite la funzione .forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.

let output = document.getElementById("output")

const cats = [{
        nome: "sophie",
        eta: 0,
        colore: "gray",
        sesso: "f",
        opacity: 0
    },
    {
        nome: "megghie",
        eta: 0,
        colore: "black",
        sesso: "f",
        opacity: 0
    },
    {
        nome: "simba",
        eta: 0,
        colore: "red",
        sesso: "m",
        opacity: 0
    },
    {
        nome: "luna",
        eta: 0,
        colore: "white",
        sesso: "f",
        opacity: 0
    },
    {
        nome: "rusty",
        eta: 0,
        colore: "black and white",
        sesso: "m",
        opacity: 0
    },
    {
        nome: "pippo",
        eta: 0,
        colore: "brown",
        sesso: "m",
        opacity: 0
    }
];

cats.forEach(element => {
    element.eta = randomNumber(1, 99)
    element.opacity = element.eta / 100
    output.innerHTML += `<li> il nome del gatto è: ${element.nome} ede e di colore: ${element.colore} </li>`
});

// Milestone 2
// Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni gattino un fiocco colorato di rosa,
//  se femmina, o di blu, se maschio.
//   Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.

let output2 = document.getElementById("output2")

const maschio = cats.filter((element) => element.sesso == "m");
const femmina = cats.filter((element) => element.sesso == "f");

maschio.forEach(element => {
    element.fiocco = `<i class="fas fa-ribbon blue" style="opacity:${element.opacity};"></i>`
    output2.innerHTML += `<li> il nome del gatto è: ${element.nome} ede e di colore: ${element.colore} ed ha l'eta di ${element.eta} anni ${element.fiocco} </li>`
});

femmina.forEach(element => {
    element.fiocco = `<i class="fas fa-ribbon pink" style="opacity:${element.opacity};"></i>`
    output2.innerHTML += `<li> il nome del gatto è: ${element.nome} ede e di colore: ${element.colore} ed ha l'eta di ${element.eta} anni ${element.fiocco} </li>`
});

// Milestone 3
// Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio,
//  inserendo solamente nome e colore  e opacità del fiocco per ogni gatto.

let output3 = document.getElementById("output3")

// FUNCTION

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}