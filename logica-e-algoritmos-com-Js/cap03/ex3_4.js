const prompt = require("prompt-sync")();

const pesoRacao = Number(prompt("Peso da Ração (Kg): "));
const consumoDia = Number(prompt("Consumo Diário (gr): "));
const pesoGr = pesoRacao * 1000;

const duracao = Math.floor((pesoGr) / consumoDia);
const sobra = pesoGr % consumoDia;

console.log(`Duração: ${duracao} dias\nSobra: ${sobra}gr`);
