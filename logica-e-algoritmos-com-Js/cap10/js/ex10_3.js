const frm = document.querySelector("form");
const tbFilmes = document.querySelector("table");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const filme = frm.inFilme.value;
  const genero = frm.inGenero.value;

  inserirLinha(filme, genero); //chama a função que insere filmes na tabela
  gravarFilme(filme, genero); //chama a função que grava dados no localStorage

  frm.reset();
  frm.inFilme.focus();
});

const inserirLinha = (filme, genero) => {
  const linha = tbFilmes.insertRow(-1); //adiciona uma linha na tabela

  const col1 = linha.insertCell(0); //cria colunas na linha inserida
  const col2 = linha.insertCell(1);
  const col3 = linha.insertCell(2);

  col1.innerText = filme; //joga um conteúdo em cada célula
  col2.innerText = genero;
  col3.innerHTML = "<i class='exclui' title='Excluir'>&#10008</i>";
};

const gravarFilme = (filme, genero) => {
  //se houver dados salvos em localStorage
  if (localStorage.getItem("filmesTitulo")) {
    //obtem os dados e acrescenta o delimitador
    const filmesTitulo = localStorage.getItem("filmesTitulo") + ";" + filme;
    const filmesGenero = localStorage.getItem("filmesGenero") + ";" + genero;
    localStorage.setItem("filmesTitulo", filmesTitulo);
    localStorage.setItem("filmesGenero", filmesGenero);
  } else {
    //se não é a primeira inclusão (salva sem delimitador)
    localStorage.setItem("filmesTitulo", filme);
    localStorage.setItem("filmesGenero", genero);
  }
};

window.addEventListener("load", () => {
  //ao carregar a página se houver dados salvoas no localStorage
  if (localStorage.getItem("filmesTitulo")) {
    //obtém  conteúdo e converte em elementos de vetor
    const filmes = localStorage.getItem("filmesTitulo").split(";");
    const generos = localStorage.getItem("filmesGenero").split(";");

    //percorre os elementos do vetor e os insere na tabela
    for (let i = 0; i < filmes.length; i++) {
      inserirLinha(filmes[i], generos[i]);
    }
  }
});

tbFilmes.addEventListener("click", (e) => {
  //se a classe do elemento alvo clicado contem exclui
  if (e.target.classList.contains("exclui")) {
    //acessa o pai do pai do elemento alvo, e obtém o texto do primeiro filho
    const filme = e.target.parentElement.parentElement.children[0].innerText;

    if (confirm(`Confirma Exclusão do Filme ${filme}?`)) {
      //remove a linnha da tabela, corresponde ao símbolo de excluir clicado
      e.target.parentElement.parentElement.remove();

      localStorage.removeItem("filmesTitulo"); //exclui filmes salvos em
      localStorage.removeItem("filmesGenero"); //localStorage

      //salva novamente (se existir), acessando o conteúdo da abela
      for (let i = 1; i < tbFilmes.rows.length; i++) {
        //obtém o conteúdo da tabela (coluna 0: titulo; coluna 1: genero)
        const auxTitulo = tbFilmes.rows[i].cells[0].innerText;
        const auxGenero = tbFilmes.rows[i].cells[1].innerText;
        gravarFilme(auxTitulo, auxGenero); //chama gravaFilmes com dados da tabela
      }
    }
  }
});
