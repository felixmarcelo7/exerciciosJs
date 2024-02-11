const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

const listNum = [];

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const num = Number(frm.inNum.value);
  if (!listNum.includes(num)) {
    listNum.push(num);
  } else {
    alert("Número já inserido. Por favor insira outro");
    return;
  }

  resp1.innerText = `Números: ${listNum.join(", ")}`;

  frm.reset();
  frm.inNum.focus();
});

frm.btVerificar.addEventListener("click", () => {
  if (listNum.length == 0) {
    alert("Lista de Números vazia");
  }

  const copiaListNum = [...listNum];
  copiaListNum.sort((a, b) => a - b);

  if (listNum.toString() === copiaListNum.toString()) {
    resp2.innerText = "Números estão em ordem crescente";
  } else {
    resp2.innerText = "Atenção...Números não estão em ordem crescente";
  }
});
