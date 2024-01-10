const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

let totValor = 0;
let totContas = 0;
let listaContas = "";

frm.addEventListener("submit", e => {
    e.preventDefault();

    const descConta = frm.inDescricao.value;
    const valor = Number(frm.inValor.value);

    totContas++;
    totValor += valor;
    listaContas += `${descConta} - R$: ${valor.toFixed(2)}\n`;

    resp1.innerText = `${listaContas}--------------------`;
    resp2.innerText = `${totContas} Conta(s) - Total R$: ${totValor.toFixed(2)}`;

    frm.inDescricao.value = "";
    frm.inValor.value = "";
    frm.inDescricao.focus();

});
