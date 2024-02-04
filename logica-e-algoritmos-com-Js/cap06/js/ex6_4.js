const frm = document.querySelector("form");
const resp = document.querySelector("pre");

const listaCriancas = [];

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = frm.inNome.value;
  const idade = Number(frm.inIdade.value);

  if (idade > 13) {
    alert("Permitidas apenas crianças (menores de 13 anos)");
    return;
  }

  listaCriancas.push({ nome, idade });

  frm.reset();
  frm.inNome.focus();

  frm.btListar.dispatchEvent(new Event("click"));
});

frm.btListar.addEventListener("click", () => {
  if (listaCriancas.length == 0) {
    alert("Não há crianças na lista");
    return;
  }

  const lista = listaCriancas.reduce(
    (acc, crianca) => acc + crianca.nome + " - " + crianca.idade + " anos\n",
    ""
  );

  resp.innerText = lista;
});

frm.btResumir.addEventListener("click", () => {
  if (listaCriancas.length == 0) {
    alert("Não há crianças na lista");
    return;
  }

  const copia = [...listaCriancas];
  copia.sort((a, b) => a.idade - b.idade);

  let menorIdade = copia[0].idade;
  let resumo = "";

  let nomes = [];
  for (const crianca of copia) {
    const { nome, idade } = crianca;
    if (idade == menorIdade) {
      nomes.push(nome);
    } else {
      resumo += `${menorIdade} anos(a): ${nomes.length} criança(s) -`;
      resumo += `${((nomes.length / copia.length) * 100).toFixed(2)}%\n`;
      resumo += `(${nomes.join(", ")})\n\n`;
      menorIdade = idade;
      nomes = [];
      nomes.push(nome);
    }
  }

  resumo += `${menorIdade} anos(a): ${nomes.length} criança(s) -`;
  resumo += `${((nomes.length / copia.length) * 100).toFixed(2)}%\n`;
  resumo += `(${nomes.join(", ")})\n\n`;
  resp.innerText = resumo;
});

/*
const copia = [...listaCriancas]; //cria cópia da lista de crianças
    copia.sort((a, b) => a.idade - b.idade); //ordena pela idade

    let resumo = "";  //para cocatenar a saída
    let aux = copia[0].idade; //menor idade do vetor ordenado

    let nomes = []; //para inserir nomes de cada idade
    for(const crianca of copia) {
        const {nome, idade} = crianca;
        if(idade == aux) { //se é a mesma idade auxiliar...
            nomes.push(nome); //adiciona ao vetor nomes
        } else { //senão, monta o resumo para cada idade
            resumo += aux + " anos(s): " + nomes.length + " crianças(s) - ";
            resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n";
            resumo += "(" + nomes.join(", ") + ")\n\n";
            aux = idade; //obtém a nova idade na ordem
            nomes = []; //limpa o vetor dos nomes
            nomes.push(nome); //adiciona o primeiro da nova idade
        }
    }
    resumo += aux + " anos(s): " + nomes.length + " crianças(s) - ";
    resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n";
    resumo += "(" + nomes.join(", ") + ")\n\n";

    resp.innerText = resumo;
*/