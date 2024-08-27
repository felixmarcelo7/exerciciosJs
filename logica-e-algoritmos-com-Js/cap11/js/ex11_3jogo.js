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
  palavraSorteada = palavras[numAleatorio].toLowerCase();
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
