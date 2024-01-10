const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", e => {
    e.preventDefault();

    const num = frm.inNumero.value;

    let temDivisores = 0;
    for(let i = 2; i <= num / 2; i++) {
        if(num % i == 0) {
            temDivisores = 1;
            break;
        };
    };

    if(num > 1 && !temDivisores) {
        resp.innerText = `${num} É primo`;
    } else {
        resp.innerText = `${num} Não é primo`;
    };
    
});
