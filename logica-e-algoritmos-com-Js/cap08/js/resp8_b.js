const frm = document.querySelector("form");
const resp = document.querySelector("h3");

//Funções
const validaNome = (nome) => nome.includes(" "); //recebe o nome e retorna se tem espaço ou não

const obterSobrenome = (nome) => {
  //pega apenas o último nome (sobrenome)
  const posSobrenome = nome.lastIndexOf(" ");
  let sobrenome = "";
  for (let i = posSobrenome; i < nome.length; i++) {
    sobrenome += nome.charAt(i);
  }

  return sobrenome.toLowerCase();
};

const contarVogais = (nome) => {
  //pega o nome e retorna a quantidade de vogais tem no nome
  let num = 0;
  const vogais = "aeiou";
  for (const letra of nome) {
    const letraLower = letra.toLowerCase();
    if (vogais.includes(letraLower)) {
      num++;
    }
  }

  return (num = num < 10 ? "0" + num : num); //se o número é menor que 10 adiciona um 0 na frente
};

//Programa Principal
frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = frm.inNome.value;

  if (validaNome(nome)) {
    resp.innerText = `Senha Inicial: ${obterSobrenome(nome)}${contarVogais(
      nome
    )}`;
  } else {
    alert("Nome Incompleto!!!");
    frm.inNome.focus();
    resp.innerText = "";
  }

  frm.reset();
});
