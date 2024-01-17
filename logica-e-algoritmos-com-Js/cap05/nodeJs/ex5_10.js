const prompt = require("prompt-sync")();

const valor = Number(prompt("Valor R$:"));
let parcelas;

do {
    parcelas = Number(prompt("N° de Parcelas: "));
    if(parcelas  > 12 || isNaN(parcelas)) {
        console.log("Número de parcelas inválida (até 12x)");
    } else {
        break;
    }

} while(true);

const valorParcela = Math.floor(valor / parcelas);
const ultimaParcela = valorParcela + (valor % parcelas);

for(let i = 1; i < parcelas; i++) {
    console.log(`${i}° Parcela: ${valorParcela.toFixed(2)}`);
};

console.log(`${parcelas}° Parcela: ${ultimaParcela.toFixed(2)}`);
