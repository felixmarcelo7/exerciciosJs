const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", e => {
    e.preventDefault();

    const numSimb = frm.inNumero.value; //pega o numero de simbolos
    
    let simbolos = "";
    for(let i = 1; i <= numSimb; i++) {
        if(i % 2 == 1) {// se posição ímpar
            simbolos += "*"; // *
        } else { // se par
            simbolos += "-"; // -
        };
    };

    resp.innerText = simbolos;
});
