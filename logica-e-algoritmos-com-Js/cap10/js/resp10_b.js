const frm = document.querySelector("form");
const divForm = document.querySelector("#div__form");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = frm.inNome.value.trim();

  if (!nome.includes(" ")) {
    alert("Digite o nome completo");
    return;
  }

  const nomeSeparado = nome.split(" ");
  const listaH3 = document.querySelectorAll("h3");

  if (listaH3.length > 0) {
    listaH3.forEach((tit) => {
      divForm.removeChild(tit);
    });
  }

  const cores = [
    "blue",
    "red",
    "yellow",
    "green",
    "orange",
    "chocolate",
    "deeppink",
    "purple",
    "violet",
    "aquamarine",
  ];
  nomeSeparado.forEach((nome) => {
    const h3 = document.createElement("h3");
    const parteNome = document.createTextNode(nome);
    h3.appendChild(parteNome);
    const corSorteada = Math.floor(Math.random() * 10);
    h3.style.color = cores[corSorteada];
    divForm.appendChild(h3);
  });
});
