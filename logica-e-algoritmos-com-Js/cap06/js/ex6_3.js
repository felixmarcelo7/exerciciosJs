const frm = document.querySelector("form");
const resp = document.querySelector("pre");

let listaCarros = [];

frm.addEventListener("submit", e => {
    e.preventDefault();

    const modelo = frm.inModelo.value;
    const preco = Number(frm.inPreco.value);

    listaCarros.push({modelo, preco});
    
    frm.reset();
    frm.inModelo.focus();
    frm.btListar.dispatchEvent(new Event("click")); //dispara um evento de click no botão Listar
});

frm.btListar.addEventListener("click", () => {
    if(listaCarros.length == 0) {
        alert("Não há carros na lista!");
        return;
    };

    const lista = listaCarros.reduce((acc, carro) => `${acc + carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`, "");
    resp.innerText = `Lista de Carros Cadastrador\n${"-".repeat(40)}\n${lista}`;
});

frm.btFiltrar.addEventListener("click", () => {
    
    const precoOrcamento = Number(prompt("Qual o orçamento do cliente?"));

    if(precoOrcamento == 0 || isNaN(precoOrcamento)) {
        alert("Bota um preço nessa DESGRAAAÇAA. Larga de ser burro, CARAI!!!");
        return;
    };

    const listaOrcamento = listaCarros.filter(carro => carro.preco <= precoOrcamento); // filtar os carros com o    preço menor ou igual o preço orçado
    if(listaOrcamento == 0) {
        alert("Não há carros com o preço inferior ou igual ao solicitado");
    };

    let lista = "";

    for(const carro of listaOrcamento) {
        const {modelo, preco} = carro; //desestruturação objedo carro
        lista += `${modelo} - R$: ${preco.toFixed(2)}\n`;
    };

    resp.innerText = `Carros até ${precoOrcamento.toFixed(2)}\n${"-".repeat(40)}\n${lista}`;

});

frm.btSimular.addEventListener("click", () => {
    const desconto = Number(prompt("Qual o percentual de desconto?"));
    if(desconto == 0 || isNaN(desconto)) {
        return;
    };

    const listaComDesconto = listaCarros.map(carro => ({
        modelo: carro.modelo,
        preco: carro.preco - (carro.preco * (desconto / 100))
    }));


    let lista = "";

    for(const carro of listaComDesconto) {
        const {modelo, preco} = carro; //desestruturação objedo carro
        lista += `${modelo} - R$: ${preco.toFixed(2)}\n`;
    };

    resp.innerText = `Carros com desconto: ${desconto}%\n${"-".repeat(40)}\n${lista}`;
});
