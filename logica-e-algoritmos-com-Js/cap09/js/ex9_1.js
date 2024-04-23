const frm = document.querySelector("form");
const imgClube = document.querySelector("#imgClube");
const dvTitulo = document.querySelector("#divTitulo");

const verificarClube = () => {
  // se já estiver salvo algum clube
  if (localStorage.getItem("clube")) {
    const clube = localStorage.getItem("clube"); //obtém o nome do clube

    if (clube == "Brasil") {
      //conforme o clube, marca checked
      frm.rbBrasil.checked = true;
    } else if (clube == "Pelotas") {
      frm.rbPelotas.checked = true;
    } else {
      frm.rbFarroupilha.checked = true;
    }

    trocarClube(); //chama a função que troca a imagem e cores
  }
};

const trocarClube = () => {
  let clube; //variável que irá receber o nome do clube

  if (frm.rbBrasil.checked) {
    //verifica qual radiobutton está selecionado
    clube = "Brasil";
  } else if (frm.rbPelotas.checked) {
    clube = "Pelotas";
  } else {
    clube = "Farroupilha";
  }

  //define as classes de dvTitulo: row e cores do clube
  dvTitulo.className = `row cores-${clube}`;

  //modifica a imagem de acordo com a seleção do cliente
  imgClube.src = `img/${clube.toLowerCase()}.png`;
  imgClube.className = "img-fluid"; //muda o estilo para exibir a imagem
  imgClube.alt = `Simbolo do ${clube}`; //modifica o atributo alt

  localStorage.setItem("clube", clube); //salva no navegador
};

//associa ao evento change de cada botão do form a função trocaClube
frm.rbBrasil.addEventListener("change", trocarClube);
frm.rbPelotas.addEventListener("change", trocarClube);
frm.rbFarroupilha.addEventListener("change", trocarClube);

//ao carregar a página, veriafica se cliente já selecionou clube anteriormente
window.addEventListener("load", verificarClube);
