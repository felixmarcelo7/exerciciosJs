const prompt = require("prompt-sync")();

console.log("Programa Anos de Copa do Mundo. Digite 0 para sair.");
console.log("-".repeat(50));

do {
    const ano = Number(prompt("Digite um ano, para saber se é ano de Copa (Digite 0 para sair): "));

    if (ano == 0) {
        break;
    } else if(ano < 0 || isNaN(ano) || ano.toString().length < 4) {
        console.log("Digite um Ano válido.\n");
    } else if(ano == 1942 || ano == 1946) {
        console.log(`No ano de ${ano} não houve Copa por causa da Segunda Guerra Mundial.\n`);  
    } else if(ano < 1930) {
        console.log("Não foi ano de Copa, pois a sua primeira edição foi em 1930.\n");
    } else if ((ano - 1930) % 4 == 0) {
        console.log(`${ano} é ano de Copa.\n`);
    } else { 
        console.log(`${ano} Não é ano de Copa.\n`);
    };

} while(true);
