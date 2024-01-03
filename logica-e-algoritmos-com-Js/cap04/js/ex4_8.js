const prompt = require("prompt-sync")();

const totCompra = Number(prompt("Total da Compra R$: "));
const totParcelas = totCompra / 20;
let valorParcelas;
if(totParcelas > 6) {
    valorParcelas = totCompra / 6;
    console.log(`Você pode parcelar sua compra em até 6xR$${valorParcelas.toFixed(2)}`);
}else if(totParcelas < 1) {
    console.log(`Vo`);
} else {
    valorParcelas = totCompra / Math.floor(totParcelas);
    console.log(`Você pode parcelar sua compra em até ${Math.floor(totParcelas)}xR$${valorParcelas.toFixed(2)}`);
};

// const prompt = require("prompt-sync")();     // adiciona pacote prompt-sync
// const valor = Number(prompt("Valor da Compra R$: "));  // lê valor da compra
// const aux = Math.floor(valor / 20);     // aux = nº de parcelas sem condições 
// const parcelas = aux == 0 ? 1 : aux > 6 ? 6 : aux;     // operador ternário
// // let parcelas;
// // if (aux == 0) {
// //     parcelas = 1;
// // } else if (aux > 6) {
// //     parcelas = 6;
// // } else {
// //     parcelas = aux;
// // }
// const valorParcela = valor / parcelas;       // cálculo do valor da parcela               
// console.log(`Pode pagar em ${parcelas}x de R$: ${valorParcela.toFixed(2)}`);