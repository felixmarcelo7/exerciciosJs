const prompt = require("prompt-sync")();
let numParcelas = 0;

do {
  numParcelas = Number(prompt("Quantas Parcelas: "));

  if (numParcelas > 12) {
    console.log("O número máximo de parcelas permitidas é 12");
  } else if (isNaN(numParcelas) || numParcelas < 1) {
    console.log("Digite um número válido");
  } else {
    break;
  }
} while (true);

console.log();

const hoje = new Date();
for (let i = 1; numParcelas >= i; i++) {
  hoje.setMonth(hoje.getMonth() + 1);
  const dia = hoje.getDate();
  const mes = hoje.getMonth() + 1;
  const ano = hoje.getFullYear();
  const diaZero = dia < 10 ? "0" + dia : dia;
  const mesZero = mes < 10 ? "0" + mes : mes;
  console.log(`${i}a Parcela: ${diaZero}/${mesZero}/${ano}`);
}

console.log();
