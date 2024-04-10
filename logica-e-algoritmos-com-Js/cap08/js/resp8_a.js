const frm = document.querySelector("form");
const resp = document.querySelector("pre");

//Funções
const retornaTracos = (nome) => {
  //lê o nome do atleta e retorna os traços
  let tracos = "";
  for (const letra of nome) {
    if (letra != " ") {
      tracos += "-";
    } else {
      tracos += " ";
    }
  }

  return tracos;
};

const categorizaAluno = (idade) => {
  //lê a idade e retorna qual categoria o atleta se encaixa
  let categoria = "";
  if (idade <= 12) {
    categoria = "Infantil";
  } else if (idade > 12 && idade <= 18) {
    categoria = "Juvenil";
  } else {
    categoria = "Adulto";
  }

  return categoria;
};

//Programa Principal

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = frm.inNome.value;
  const idade = Number(frm.inIdade.value);

  resp.innerText = `${nome}\n${retornaTracos(
    nome
  )}\nCategoria: ${categorizaAluno(idade)}`;

  frm.reset();
});
