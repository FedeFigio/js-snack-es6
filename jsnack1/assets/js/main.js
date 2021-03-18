// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal 

let output = document.getElementById("output")

let bikes = []

bikes.push({
    nome: "mountain Bike",
    peso: 5
});
bikes.push({
    nome: "BMX",
    peso: 4
});
bikes.push({
    nome: "graziella",
    peso: 8
});
bikes.push({
    nome: "DH",
    peso: 2
});
bikes.push({
    nome: "corsa",
    peso: 7
});


let pesoMinimo = bikes[0].peso;
let nomeBici = "";

for (let i = 0; i < bikes.length; i++) {
    if (bikes[i].peso < pesoMinimo) {
        let { peso, nome } = bikes[i]
        pesoMinimo = peso
        nomeBici = nome
    }
}

output.innerHTML = `la bici che pesa meno e: ${nomeBici} ed il suo peso e ${pesoMinimo} `