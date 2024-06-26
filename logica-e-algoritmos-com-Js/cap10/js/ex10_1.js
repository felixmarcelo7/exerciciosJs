const frm = document.querySelector("form");
const dvQuadro = document.querySelector("#divQuadro");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const tarefa = frm.inTarefa.value; //obtém o conteúdo digitado

  const h5 = document.createElement("h5"); //cria o elemento HTML h5
  const texto = document.createTextNode(tarefa); //cria um texto
  h5.appendChild(texto); //define que texto será filho de h5
  dvQuadro.appendChild(h5); //e que h5 será filho de divQuadro

  frm.inTarefa.value = ""; //limpa o campo de edição
  frm.inTarefa.focus(); //joga o cursor neste campo
});

frm.btSelecionar.addEventListener("click", () => {
  const tarefas = document.querySelectorAll("h5");

  if (tarefas.length == 0) {
    alert("Não há tarefas para selecionar"); //se não há tarefas, exibe alerta
    return; //e retorna
  }

  let aux = -1; //variável auxiliar para indicar linha selecionada

  //percorre a lista de elementos h5 inseridos na página, ou seja, tarefas
  for (let i = 0; i < tarefas.length; i++) {
    //se tag é da class tarefa-selecionada (está selecionada)
    if (tarefas[i].className == "tarefa-selecionada") {
      tarefas[i].className = "tarefa-normal"; //troca para normal
      aux = i; //muda valor da variável euxiliar
      break; //sai da repetição
    }
  }

  //se a linha que está selecionada é a última, irá voltar para a primeira
  if (aux == tarefas.length - 1) {
    aux = -1;
  }

  tarefas[aux + 1].className = "tarefa-selecionada"; //muda estilo da próxima linha
});

frm.btRetirar.addEventListener("click", () => {
  const tarefas = document.querySelectorAll("h5");

  let aux = -1;

  //percorre a lista das tarefas inseridas na página (elementos h5)
  tarefas.forEach((tarefa, i) => {
    if (tarefa.className == "tarefa-selecionada") {
      //se é da classe tarefa-selecionada
      aux = i; //muda valor da variável aux
    }
  });

  if (aux == -1) {
    //se não há tarefa selecionada (ou se lista vazia...)
    alert("Selecione uma tarefa para removê-la...");
    return;
  }

  //solicita confirmação (exibindo o conteúdo da teg h5 selecionada)
  if (confirm(`Confirma Exclusão "${tarefas[aux].innerText}"?`)) {
    dvQuadro.removeChild(tarefas[aux]); //remove um dos filhos de divQuadro
  }
});

frm.btGravar.addEventListener("click", () => {
  const tarefas = document.querySelectorAll("h5");

  if (tarefas.length == 0) {
    alert("Não há tarefas para serem salvas"); //se não há tarefas, eqxibe alerta
    return;
  }

  let dados = ""; //irá "acumular" os dados a serem salvos
  tarefas.forEach((tarefa) => {
    dados += tarefa.innerText + ";"; //acumula conteúdo de cada h5
  });

  //grava os dados em localStorage, removendo o último ";"
  localStorage.setItem("tarefasDia", dados.slice(0, -1));

  //confere se dados foram armaenados em localStorage
  if (localStorage.getItem("tarefasDia")) {
    alert("Ok! Tarefas Salvas");
  }
});

window.addEventListener("load", () => {
  //verifica se há tarefas salvas no navegador do usuário
  if (localStorage.getItem("tarefasDia")) {
    //cria um vetor com a lista de tarefas (separadas pelo split(";"))
    const dados = localStorage.getItem("tarefasDia").split(";");

    //percorre os dados armazenados em localStorage
    dados.forEach((dado) => {
      const h5 = document.createElement("h5"); //cria o elemento html h5
      const texto = document.createTextNode(dado); // cria um texto
      h5.appendChild(texto); //define que texto será filho de h5
      dvQuadro.appendChild(h5); //e que h5 será filho de divQuadro
    });
  }
});

/*
frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const tarefa = frm.inTarefa.value;
  const h5 = document.createElement("h5");
  const texto = document.createTextNode(tarefa);
  h5.appendChild(texto);
  dvQuadro.appendChild(h5);

  frm.inTarefa.value = "";
  frm.inTarefa.focus();
});

let cont = 0;

frm.btSelecionar.addEventListener("click", () => {
  const tarefas = document.querySelectorAll("h5");
  const lestIndex = tarefas.length - 1;

  if (tarefas.length == 0) {
    alert("Não há tarefas para selecionar"); //se não há tarefas, exibe alerta
    return; //e retorna
  }

  if (tarefas[lestIndex].className == "tarefa-selecionada") {
    tarefas[lestIndex].className = "tarefa-normal";
  }

  tarefas[cont].className = "tarefa-selecionada";

  if (cont != 0) {
    tarefas[cont - 1].className = "tarefa-normal";
  }

  if (cont == lestIndex) {
    cont = -1;
  }

  cont++;
});

frm.btRetirar.addEventListener("click", () => {
  const tarefas = document.querySelectorAll("h5");

  let aux = -1;
  tarefas.forEach((tarefa, i) => {
    if (tarefa.className == "tarefa-selecionada") {
      aux = i;
    }
  });

  if (aux == -1) {
    alert("Selecione uma tarefa para remover...");
    return;
  }

  if (confirm(`Confirmar exclusão da tarefa ${tarefas[aux].innerText}?`)) {
    dvQuadro.removeChild(tarefas[aux]);
    cont = 0;
  }
});

frm.btGravar.addEventListener("click", () => {
  const tarefas = document.querySelectorAll("h5");

  let dados = "";
  tarefas.forEach((tarefa) => {
    dados += tarefa.innerText + ";";
  });

  if (tarefas.length == 0) {
    alert("Não há tarefas para gravar");
    localStorage.removeItem("tarefas");
    return;
  }

  localStorage.setItem("tarefas", dados.slice(0, -1));
  alert("Ok, Lista Gravada");
});

window.addEventListener("load", () => {
  const tarefas = localStorage.getItem("tarefas").split(";");

  tarefas.forEach((tarefa) => {
    const h5 = document.createElement("h5");
    const texto = document.createTextNode(tarefa);
    h5.appendChild(texto);
    dvQuadro.appendChild(h5);
  });
});
*/