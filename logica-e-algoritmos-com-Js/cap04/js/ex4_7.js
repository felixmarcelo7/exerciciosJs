const prompt = require("prompt-sync")();

const pessoas = Number(prompt("Número de pessoas: "));
const peixes = Number(prompt("Quantidade de peixes pescados: "));

let valorPagar;

if(pessoas >= peixes) {
    valorPagar = pessoas * 20;
} else {
    const difPorPeixe = peixes - pessoas;
    valorPagar = pessoas * 20 + (difPorPeixe * 12)
};

console.log(`O valor a ser pago é R$${valorPagar.toFixed(2)}`);
