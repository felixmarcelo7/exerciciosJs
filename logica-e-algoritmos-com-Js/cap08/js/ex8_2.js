const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const modelo = frm.inModelo.value;
  const anoCarro = Number(frm.inAno.value);
  const preco = Number(frm.inPreco.value);

  const classificacaoCarro = classificaVeiculo(anoCarro);
  const entrada = calcularEntrada(preco, classificacaoCarro);

  resp1.innerText = `${modelo} - ${classificacaoCarro}`;
  resp2.innerText  = `Entrada R$: ${entrada.toFixed(2)}`;
  resp3.innerText = `+10x de R$: ${(preco - entrada).toFixed(2)}`;
});

const classificaVeiculo = (anoVeiculo) => {
  //Verifica se o veículo é Novo, Seminovo ou Usado

  const anoAtual = new Date().getFullYear(); //Obtém o ano atual

  let classificacao;
  if (anoVeiculo == anoAtual) {
    classificacao = "Novo";
  } else if (anoVeiculo == anoAtual - 1 || anoVeiculo == anoAtual - 2) {
    classificacao = "Seminovo";
  } else {
    classificacao = "Usado";
  }

  return classificacao;
};

const calcularEntrada = (preco, classicacao) => classicacao == "Novo" ? preco * 0.5 : preco * 0.3;
//Verifica a classificação do carro. Se for Novo calcula a entrada de 50% se não calcula a entrada de  30%