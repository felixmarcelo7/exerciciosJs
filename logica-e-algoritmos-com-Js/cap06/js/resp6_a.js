const frm = document.querySelector("form");
const resp = document.querySelector("pre");

const listaClubes = [];

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const clube = frm.inClube.value;

  listaClubes.push(clube);

  frm.reset();
  frm.inClube.focus();

  frm.btListar.dispatchEvent(new Event("click"));
});

frm.btListar.addEventListener("click", () => {
  if (listaClubes == 0) {
    alert("Não há clubes cadastrados na lista");
    return;
  }

  const lista = listaClubes.reduce((acc, clube) => acc + clube + "\n", "");

  resp.innerText = lista;
});

frm.btMontar.addEventListener("click", () => {
  if (listaClubes.length % 2 != 0) {
    alert("O total da Lista de Clubes precisa ser par");
    return;
  }

  const copiaClubes = [...listaClubes];
  copiaClubes.reverse();

  let listaConf = "";

  for (let i = 0; i < copiaClubes.length / 2; i++) {
    listaConf += `${listaClubes[i]} x ${copiaClubes[i]}\n`;
  }

  resp.innerText = listaConf;
});
