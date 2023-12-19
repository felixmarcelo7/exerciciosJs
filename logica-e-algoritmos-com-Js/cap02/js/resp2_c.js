const frm = document.querySelector("form");
const resp1 = document.querySelectorAll("h3")[0];
const resp2 = document.querySelectorAll("h3")[1];

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const produto = frm.inProduto.value;
    const preco = frm.inPreco.value;

    resp1.innerText = `${produto} - Promoção: Leve 3 pro R$${((preco * 2) + (preco / 2)).toFixed(2)}`;
    resp2.innerText = `O 3° produto custa apenas R$${(preco / 2).toFixed(2)}`;
});

