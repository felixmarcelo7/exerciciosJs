const frm  = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

frm.addEventListener("submit", e => {
    e.preventDefault();

    const num = Number(frm.inNum.value);

    let divisores = "1";
    let soma = 1;
    for(let i = 2; i <= num / 2; i++) {
        if(num % i == 0) {
            divisores += ", " + i;
            soma += i;
        };
    };
    
    if(soma == num) {
        resp1.innerText = `Divisores do ${num}: ${divisores} (soma: ${soma})`;
        resp2.innerText = `${num} É um Número Perfeito.`;
    } else {
        resp1.innerText = "";
        resp2.innerText = `${num} Não É um Número Perfeito.`;
    };
    
});
