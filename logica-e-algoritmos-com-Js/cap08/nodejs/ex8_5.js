const prompt = require("prompt-sync")();

const vinhos = [
  { marca: "Chateau Margaux", tipo: "Tinto", valor: 500 },
  { marca: "Domaine de la Roma", tipo: "Tinto", valor: 10000 },
  { marca: "Opus One", tipo: "Tinto", valor: 300 },
  { marca: "Screaming Eagle", tipo: "Tinto", valor: 5000 },
  { marca: "Château d'Yquem", tipo: "Branco", valor: 300 },
  { marca: "Vega Sicilia Único", tipo: "Tinto", valor: 800 },
  { marca: "Penfolds Grange", tipo: "Tinto", valor: 600 },
  { marca: "Sassicaia", tipo: "Tinto", valor: 400 },
  { marca: "Tignanello", tipo: "Tinto", valor: 200 },
  { marca: "Petrus", tipo: "Tinto", valor: 10000 },
  { marca: "Domaine Leroy", tipo: "Tinto", valor: 700 },
  { marca: "Krug", tipo: "Espumante", valor: 250 },
  { marca: "Louis Roederer", tipo: "Espumante", valor: 400 },
  { marca: "Dom Pérignon", tipo: "Espumante", valor: 200 },
  { marca: "Bollinger RD", tipo: "Espumante", valor: 600 },
  { marca: "Moët & Chandon", tipo: "Espumante", valor: 100 },
  { marca: "Laurent-Perrier", tipo: "Espumante", valor: 150 },
  { marca: "Veuve Clicquot", tipo: "Espumante", valor: 80 },
  { marca: "Taittinger", tipo: "Espumante", valor: 120 },
  { marca: "Ruinart", tipo: "Espumante", valor: 90 },
  { marca: "Alvarinho", tipo: "Branco", valor: 30 },
  { marca: "Sauvignon Blanc", tipo: "Branco", valor: 25 },
  { marca: "Chardonnay", tipo: "Branco", valor: 40 },
  { marca: "Pinot Grigio", tipo: "Branco", valor: 20 },
  { marca: "Riesling", tipo: "Branco", valor: 35 },
  { marca: "Gewürztraminer", tipo: "Branco", valor: 45 },
  { marca: "Viognier", tipo: "Branco", valor: 50 },
  { marca: "Merlot", tipo: "Tinto", valor: 30 },
  { marca: "Cabernet Sauvignon", tipo: "Tinto", valor: 40 },
  { marca: "Syrah", tipo: "Tinto", valor: 35 },
];

function titulo(texto) {
  //rescebe, por parâmetro, o texto a ser exibido
  console.log();
  console.log(texto);
  console.log("=".repeat(40));
}

//função para incluir vilhos na lista
function incluir() {
  titulo("===< Inclusão de Vinhos");

  const marca = prompt("Marca...: ");
  const tipo = prompt("Tipo...: ");
  const valor = Number(prompt("Preço R$: "));

  vinhos.push({ marca, tipo, valor }); // insere um objeto no vetor
  console.log("\nOk! Vinho cadastrado com sucesso");
}

function listar() {
  titulo("===< Lista de Vinhos Cadastrador >===");
  console.log(`Marca${".".repeat(15)} Tipo${".".repeat(16)} Preço R$:`);

  for (const vinho of vinhos) {
    const { marca, tipo, valor } = vinho;
    console.log(
      `${marca.padEnd(20)} ${tipo.padEnd(20)} ${valor.toFixed(2).padStart(9)}`
    );
  }
}

function pesquisar() {
  titulo("===< Pesquisar por Tipo de Vinho >===");
  const pesq = prompt("Tipo: ").toLowerCase(); //lê o tipo de vinho para pesquisar

  const vinhosPesq = vinhos.filter((vinho) =>
    vinho.tipo.toLowerCase().includes(pesq)
  ); //filtra os vinhos pesquisador

  if (vinhosPesq.length == 0) {
    console.log("\nNenhum vinho encontrado!!!");
  } else {
    console.log(`Marca${".".repeat(15)} Tipo${".".repeat(16)} Preço R$:`);
    for (const vinho of vinhosPesq) {
      //faz a lista dos vinhos
      const { marca, tipo, valor } = vinho;
      console.log(
        `${marca.padEnd(20)} ${tipo.padEnd(20)} ${valor.toFixed(2).padStart(9)}`
      );
    }
  }
}

function calcularMedia() {
  titulo("===< Média e Destaque do Cadastro de Vinhos >===");

  const precoTotal = vinhos.reduce((acc, vinho) => acc + vinho.valor, 0);
  const precoMedio = precoTotal / vinhos.length;

  const vinhos2 = [...vinhos];
  const vinhosOrdem = vinhos2.sort((a, b) => a.valor - b.valor); //ordena por preço

  const precoMenor = vinhosOrdem[0].valor;
  const precoMaior = vinhosOrdem[vinhosOrdem.length - 1].valor;

  console.log(`Preço Médio dos Vinhos: R$${precoMedio.toFixed(2)}`);
  console.log(
    `Menor Valor: R$${precoMenor.toFixed(2)} - ${vinhosOrdem[0].marca}`
  );
  console.log(
    `Maior Valor: R$${precoMaior.toFixed(2)} - ${
      vinhosOrdem[vinhosOrdem.length - 1].marca
    }`
  );
}

//Programa Principal
do {
  titulo("===< Cadastro de Vinhos >===");
  console.log("1. Inclusão de Vinhos");
  console.log("2. Listagem de Vinhos");
  console.log("3. Pesquisa por tipo");
  console.log("4. Média e Destaques");
  console.log("5. finalizar");
  const opcao = Number(prompt("Opção: "));

  if (opcao == 1) {
    incluir();
  } else if (opcao == 2) {
    listar();
  } else if (opcao == 3) {
    pesquisar();
  } else if (opcao == 4) {
    calcularMedia();
  } else {
    break;
  }
} while (true);
