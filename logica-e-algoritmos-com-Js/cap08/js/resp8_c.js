const frm = document.querySelector("form");
const resp = document.querySelector("h3");
const convenio = document.getElementById("convenio");

frm.rbSim.addEventListener("click", () => {
    convenio.className = "exibe";
})

frm.rbNao.addEventListener("click", () => {
    convenio.className = "oculta";
})

const calcularDesconto = (valor, taxaDesc) => valor * taxaDesc;

//programa principal
frm.addEventListener("submit", e => {
    e.preventDefault();

    const valor = Number(frm.inValor.value);

    let taxaDesc = 0;
    const opcaoConveino = frm.optsConvenio.value;
    if(frm.rbNao.checked) {
        taxaDesc = 0.1;
    } else {
        taxaDesc = opcaoConveino == "amigoAnimais" ? 0.2 : 0.5;
    }

    resp.innerText = `Desconto R$: ${calcularDesconto(valor, taxaDesc).toFixed(2)}`;
    resp.innerText += `\n\nA Pagar R$: ${(valor - calcularDesconto(valor, taxaDesc)).toFixed(2)}`
});