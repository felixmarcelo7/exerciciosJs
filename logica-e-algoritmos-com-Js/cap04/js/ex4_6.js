const frm = document.querySelector("form");
const resp1 = document.querySelectorAll("h3")[0];
const resp2 = document.querySelectorAll("h3")[1];
const resp3 = document.querySelectorAll("h3")[2];

frm.addEventListener("submit", e => {
    e.preventDefault();

    const saque = frm.inSaque.value;

    if(saque % 10 != 0) { //verifica se o valor do saque é multiplo de 10
        alert("Valor inválido para notas disponíveis (R$ 10, 50, 100)")
        frm.inSaque.focus();
        return;
    };

    const notaCem = Math.floor(saque / 100);
    let resto = saque % 100;
    const notaCinquenta = Math.floor(resto / 50);
    resto = resto % 50;
    const notaDez = Math.floor(resto / 10);
    
    if(notaCem > 0) {
        resp1.innerText = `Notas de R$100: ${notaCem}`;
    }
    if(notaCinquenta > 0) {
        resp2.innerText = `Notas de R$50: ${notaCinquenta}`;
    }
    if(notaDez > 0) {
        resp3.innerText = `Nota de R$10: ${notaDez}`;
    }

});