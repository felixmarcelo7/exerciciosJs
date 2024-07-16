const frm = document.querySelector("form");
const divForm = document.querySelector("#div__form");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const clube = frm.inClube.value;

  const h5 = document.createElement("h5");
  const titulo = document.createTextNode(clube);
  h5.className = "fst-italic text-end";
  h5.appendChild(titulo);
  divForm.appendChild(h5);

  frm.reset();
});

frm.btMontar.addEventListener("click", () => {
  const listaH5 = document.querySelectorAll("h5");

  if (listaH5.length % 2 == 1 || !listaH5.length) {
    alert("O número de times deve ser Par!");
    return;
  }

  const h3 = document.createElement("h3");
  const titulo = document.createTextNode("Tabela de Jogos");
  h3.appendChild(titulo);
  divForm.appendChild(h3);

  const novaTabela = document.createElement("table");
  novaTabela.className = "table table-striped";
  divForm.appendChild(novaTabela);

  let linha;
  for (var i = 0; i < listaH5.length; i++) {
    if (i % 2 == 0) {
      linha = novaTabela.insertRow(-1);
      const col1 = linha.insertCell(0);
      col1.textContent = listaH5[i].innerText;
    } else {
      const col2 = linha.insertCell(1);
      col2.textContent = listaH5[i].innerText;
    }

    btMontar.disabled = true;
  }
});

frm.btNovos.addEventListener("click", () => {
  location.reload();
});
