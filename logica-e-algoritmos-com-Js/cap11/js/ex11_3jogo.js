const frm = document.querySelector("form");
const respPalavra = document.querySelector("#outPalavra");
const respErros = document.querySelector("#outErros");
const respDica = document.querySelector("#outDica");
const respChances = document.querySelector("#outChances");
const respMensagemFinal = document.querySelector("#outMensagemFinal");
const imgStatus = document.querySelector("img");

let palavraSorteada;
let dicaSorteada;

window.addEventListener("load", () => {
  //se não há palavras cadastradas
  if (!localStorage.getItem("palavrasCadas")) {
    alert("Cadastre palavras para jogar"); //exibe alerta
    frm.inLetra.disabled = true;
    frm.btJogar.disabled = true;
    frm.btVerDica.disabled = true;
  }

  //obtém conteúdo do localStorage e separa em elementos de vetor
  const palavras = localStorage.getItem("palavrasCadas").split(";");
  const dicas = localStorage.getItem("dicasCadas").split(";");

  const tam = palavras.length; //número de palavras cadastradas

  //gere um número entre 0 e tam-1(pois arredonda para baixo)
  const numAleatorio = Math.floor(Math.random() * tam);

  //obtem palavra e(em letaras maiusculas) e dica na posição do n° aleatório gerado
  palavraSorteada = palavras[numAleatorio].toUpperCase();
  dicaSorteada = dicas[numAleatorio];
  let novaPalavra = ""; //para montar palavra exibida (com letra inicial e "_")\

  //for para exibir a letra inicil e as demais ocorrências desra letra na palavra
  for (const letra of palavraSorteada) {
    //se igual a letra inicial, acrescenta esta letra na exibição
    if (letra == palavraSorteada.charAt(0)) {
      novaPalavra += palavraSorteada.charAt(0);
    } else {
      novaPalavra += "_"; //senão, acrescenta "_"
    }
  }

  respPalavra.innerText = novaPalavra; //exibe a palavra
});

frm.btVerDica.addEventListener("click", () => {
  //verifica se o jogador já clicou anteriormente no botão
  if (respErros.innerText.includes("*")) {
    alert("Você já solicitou a dica....");
    frm.inLetra.focus();
    return;
  }

  respDica.innerText = " * " + dicaSorteada; //exibe a dica
  respErros.innerText += "*"; //acrescenta "*" nos erros

  const chances = Number(respChances.innerText) - 1; //diminui 1 em chances
  respChances.innerText = chances; //mostra o n° de chances

  trocarStatus(chances); //troca imagem

  verificarFim(); //verifica se atingiu limite de chances

  frm.inLetra.focus();
});

const trocarStatus = (num) => {
  if (num > 0) imgStatus.src = `img/status${num}.jpg`;
};

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const letra = frm.inLetra.value.toUpperCase(); //obtém o conteúdo do campo inLetra

  let erros = respErros.innerText; //obtém o conteúdo do campo inLetra
  let palavra = respPalavra.innerText;

  //verifica se a letra apostada já consta em erros ou na palavra
  if (erros.includes(letra) || palavra.includes(letra)) {
    alert("Você já apostou esta letra");
    frm.inLetra.focus();
    return;
  }

  //se letra consta em palavraSorteada
  if (palavraSorteada.includes(letra)) {
    let novaPalavra = ""; //para compoir novaPalavra
    //for para montar a palavra a ser exibida
    for (let i = 0; i < palavraSorteada.length; i++) {
      //se igual a letra apostada, acrescenta esta letra na exibição
      if (palavraSorteada.charAt(i) == letra) {
        novaPalavra += letra;
      } else {
        novaPalavra += palavra.charAt(i); // senão, acrescenta letra ou "_" existente
      }
    }
    respPalavra.innerText = novaPalavra; //exibe a novaPalavra
  } else {
    respErros.innerText += letra; //acrescenta letra aos erros
    const chances = Number(respChances.innerText) - 1; //diminui n° de chances
    respChances.innerText = chances; //exibe n° de chances

    trocarStatus(chances); //troca imagem
  }
  verificarFim(); // ferifica se ja ganhou ou perdeu

  frm.inLetra.value = "";
  frm.inLetra.focus();
});

const verificarFim = () => {
  const chances = Number(respChances.innerText); //obtém número de chances

  if (chances == 0) {
    respMensagemFinal.className = "display-3 text-danger";
    respMensagemFinal.innerText = `Ah...é ${palavraSorteada}. Você Perdeu!`;
    concluirJogo();
  } else if (respPalavra.innerText == palavraSorteada) {
    respMensagemFinal.className = "display-3 text-primary";
    respMensagemFinal.innerText = "Parabéns!! Você Ganhou.";
    trocarStatus(4); //exibe a figura do "rostinho feliz"
    concluirJogo();
  }
};

//modifica o texto da daica e desabilita os botões de jogar
const concluirJogo = () => {
  respDica.innerText = "* Clique no botão 'Iniciar Jogo' para jogar novamente";
  frm.inLetra.disabled = true;
  frm.btJogar.disabled = true;
  frm.btVerDica.disabled = true;
};
