const prompt = require("prompt-sync")();

const salario = Number(prompt("Salário R$: "));
const tempo = Number(prompt("Tempo (anos): "));
const quadienios = Math.floor(tempo / 4);

const aumento = salario + ((salario * 0.01) * quadienios);

console.log(`Quadriênios: ${quadienios}\nSalário Final: R$${aumento.toFixed(2)}`);

