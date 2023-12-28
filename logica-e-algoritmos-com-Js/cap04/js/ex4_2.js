const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = frm.inNome.value;
    const altura = Number(frm.inAltura.value);
    const masculino = frm.inMasculino.checked;

    if(masculino) {
        const pesoIdeal = 22 * (Math.pow(altura, 2)); //também pode ser feito com (**) ex: 22 * altura ** 2
        resp.innerText = `${nome}: Seu peso ideal é ${pesoIdeal.toFixed(3)} Kg`;
    } else {
        const pesoIdeal = 21 * (Math.pow(altura, 2)); 
        resp.innerText = `${nome}: Seu peso ideal é ${pesoIdeal.toFixed(3)} Kg`;
    };
    
    frm.btLimpar.addEventListener("click", () => resp.innerText = "");
});

    