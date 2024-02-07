const prompt = require("prompt-sync")();

const alunos = [];

do {
  const nome = prompt("Aluno (Digite 'Fim' para sair): ");
  if (nome == "Fim") {
    break;
  }
  const nota = prompt("Nota: ");
  alunos.push({ nome, nota });
  console.log("OK! Aluno(a) Cadastrado(a).");
} while (true);

const maiorNota = alunos.reduce((acc, aluno) => Math.max(acc, aluno.nota), 0);

console.log("-".repeat(40));
console.log(`Maior nota: ${maiorNota}`);

if (maiorNota >= 7) {
  for (const aluno of alunos) {
    const { nome, nota } = aluno;
    if (nota == maiorNota) {
      console.log(`- ${nome}`);
    }
  }
} else {
  console.log("Não há alunos em destaque na turma");
}
