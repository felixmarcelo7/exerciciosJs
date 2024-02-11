const frm = document.querySelector("form");
const resp = document.querySelector("pre");

const listCandidatos = [];

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = frm.inCandidato.value;
  const acertos = Number(frm.inAcertos.value);

  listCandidatos.push({ nome, acertos });

  frm.reset();
  frm.inCandidato.focus();

  frm.btListar.dispatchEvent(new Event("click"));
});

frm.btListar.addEventListener("click", () => {
  if (listCandidatos.length == 0) {
    alert("Lista de candidatos está vazia!");
    return;
  }

  const lista = listCandidatos.reduce(
    (acc, candidato) =>
      `${acc + candidato.nome} - ${candidato.acertos} acertos\n`,
    ""
  );

  resp.innerText = lista;
});

frm.btAprovados.addEventListener("click", () => {
  if (listCandidatos.length == 0) {
    alert("Lista de candidatos está vazia!");
    return;
  }

  let notaCorte = 0;
  do {
    notaCorte = Number(prompt("Número de acertos para aprovação (50 a 100): "));

    if (notaCorte < 50 || notaCorte > 100 || isNaN(notaCorte)) {
      alert("Informe uma nota válida!");
      continue;
    } else {
      break;
    }
  } while (true);

  const objAprovados = listCandidatos.filter(
    (candidato) => candidato.acertos >= notaCorte
  );
  if (objAprovados.length == 0) {
    alert("Não há candidatos aprovados!");
    resp.innerText = "Nenhum Candidato Aprovado!";
  } else {
    let listaAprovados = "";
    for (const candidato of objAprovados) {
      const { nome, acertos } = candidato;
      listaAprovados += `${nome} - ${acertos} acertos\n`;
    }
    resp.innerText = listaAprovados;
  }
});
