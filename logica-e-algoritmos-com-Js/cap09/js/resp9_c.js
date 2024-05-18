const frm = document.querySelector("form");
const respLista = document.querySelector("pre");
const numServicos = document.querySelector("span");

const executarServico = () => {
  if (!localStorage.getItem("servicos")) {
    //se não há serviço alerta
    alert("Não há serviços a serem feitos");
    return;
  } else {
    // se tem serviços
    const servicosArr = localStorage.getItem("servicos").split(";"); //joga o localStoragem para um Arr
    const servicoExecucao = servicosArr.shift(); //exclui o primeiro da lista e logo para uma variável
    localStorage.setItem("execucao", servicoExecucao.toString()); //seta o serviço que está em execução
    respLista.innerText = servicoExecucao; //mostra o primeiro serviço da lista

    if (servicosArr.length >= 1) {
      //se a lista for >= 1
      localStorage.setItem("servicos", servicosArr.join(";")); //atualiza a lista no localStorage
    } else {
      localStorage.removeItem("servicos"); //se a lista estiver zerada, exclui o localStorage
    }
  }

  contarServicos();
};

const contarServicos = () => {
  if (!localStorage.getItem("servicos")) {//se não tem serviços mostra 0
    numServicos.innerText = "0";
  } else {
    const servicosArr = localStorage.getItem("servicos").split(";");
    numServicos.innerText = servicosArr.length; //se tiver mostra a quantidade
  }
};

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const servico = frm.inServico.value;

  if (localStorage.getItem("servicos")) {
    //verifica se há serviços no localStorage
    const servicos = `${localStorage.getItem("servicos")};${servico}`; //se sim adiciona o serviço na lista
    localStorage.setItem("servicos", servicos);
  } else {
    localStorage.setItem("servicos", servico); //se não começa uma lista
  }

  frm.reset();
  frm.inServico.focus();
  contarServicos();
});

frm.btExecutar.addEventListener("click", executarServico);
window.addEventListener("load", () => {
  contarServicos();

  const execucao = localStorage.getItem("execucao");//pega o serviço que está em execução

  if (!localStorage.getItem("servicos")) {//se não tiver mais serviços, limpa 
    respLista.innerText = "";
    localStorage.removeItem("execucao");
  } else {
    respLista.innerText = execucao.toString();// se tiver mostra
  }
});
