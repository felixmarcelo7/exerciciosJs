const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const preco = Number(frm.inPreco.value);
    const consumo = Number(frm.inConsumo.value);

    const valorAPagar = (consumo / 1000) * preco;

    resp.innerText = `Valor a pagar R$: ${valorAPagar.toFixed(2)}`;

});