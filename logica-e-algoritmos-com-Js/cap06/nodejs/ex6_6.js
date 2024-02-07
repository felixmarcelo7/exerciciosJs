const prompt = require("prompt-sync")();

const listaClientes = [];

do {
  const nome = prompt("Nome (digite 'Fim' para sair): ");
  if (nome == "Fim") {
    break;
  }
  const idade = Number(prompt("Idade: "));

  listaClientes.push({ nome, idade });
  console.log("-".repeat(40));
  console.log("OK! Cliente inserido na fila...");
  console.log("-".repeat(40));
} while (true);

const filaPreferencial = listaClientes.filter((cliente) => cliente.idade >= 60);
console.log("\nFila Preferencial");
console.log("-".repeat(40));
filaPreferencial.forEach((cliente, i) => {
  console.log(`${i + 1}. ${cliente.nome}`);
});

const filaNormal = listaClientes.filter((cliente) => cliente.idade < 60);
console.log("\nFila Normal");
console.log("-".repeat(40));
filaNormal.forEach((cliente, i) => {
  console.log(`${i + 1}. ${cliente.nome}`);
});
