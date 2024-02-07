const prompt = require("prompt-sync")();

console.log("Informe o valor do saque. (0 para sair)");
let saqueList = [];
let contErro = 0;
do {
    const saque = Number(prompt("Saque R$: "));
    if(saque == 0) {
        break;
    } else if(saque % 10 != 0 || isNaN(saque)) {
        console.log("Erro... Valor inválido (Apenas notas de R$10,00 dispobíveis)");
        contErro++;
    } else {
        console.log("Saque realizado com sucesso");
        saqueList.push(saque);
    }

}while(true);

console.log("\nSaques Válidos");
console.log("-".repeat(40));
for(const saque of saqueList) {
    console.log(saque.toFixed(2));
}
console.log("-".repeat(40));

const totalSaques = saqueList.reduce((total, saque) => total + saque, 0);
console.log(`Total de Saques: R$${totalSaques.toFixed(2)}`);

console.log(`N° de Tentativas de Saques (saques inválidos): ${contErro}`);
