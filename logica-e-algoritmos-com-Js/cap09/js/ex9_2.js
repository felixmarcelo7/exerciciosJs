const imgClube = document.querySelector("#imgClube");
const dvTitulo = document.querySelector("#divTitulo");
const inRadios = document.querySelectorAll("input");

const verificarClube = () => {
  // se já estiver salvo algum clube
  if (localStorage.getItem("clube")) {
    const clube = localStorage.getItem("clube"); //obtém o nome do clube

    if (clube == "Brasil") {
      //conforme o clube, marca checked
      inRadios[0].checked = true;
    } else if (clube == "Pelotas") {
      inRadios[1].checked = true;
    } else {
      inRadios[2].checked = true;
    }

    trocarClube(); //chama a função que troca a imagem e cores
  }
};

const trocarClube = () => {
  const clubes = ["Brasil", "Pelotas", "Farroupilha"];

    let selecao;
    //percorre os inRadios para verificar qual está selecionado
    for(let i = 0; i < inRadios.length; i++) {
        if(inRadios[i].checked) {
            selecao = i; //se selecionado, armazena índice do radio selecionado
            break;       //e sai da repetição
        }
    };

    if(selecao <= 2) {//se selecao <= 2, então torce para algum time
        dvTitulo.className = `row cores-${clubes[selecao]}`; //modifica a cor
         //modifica a imagem de acordo com a seleção do cliente
        imgClube.src = `img/${clubes[selecao].toLowerCase()}.png`;
        imgClube.className = "img-fluid"; //muda o estilo para exibir a imagem
        imgClube.alt = `Simbolo do ${clubes[selecao]}`; //modifica o atributo alt
        localStorage.setItem("clube", clubes[selecao]); //salva no navegador
    } else {
        dvTitulo.className = "row";
        imgClube.className = "d-none";
        imgClube.alt = "";
        localStorage.removeItem("clube"); //remove a variável do localStorage 
    }
};

//percorre os elementos para associar function ao evento change
for(const inRadio of inRadios) {
  inRadio.addEventListener("change", trocarClube);
}

//ao carregar a página, veriafica se cliente já selecionou clube anteriormente
window.addEventListener("load", verificarClube);
