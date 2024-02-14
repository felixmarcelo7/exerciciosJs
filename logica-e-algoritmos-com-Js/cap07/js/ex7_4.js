const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = frm.inNome.value.trim();
  //.trim() tira os espaços, se houver, do início e do fim

  if (!nome.includes(" ")) {
    alert("Informe o nome completo!");
    return;
  }

  const primeiroEspaco = nome.indexOf(" ");
  const ultimoEspaco = nome.lastIndexOf(" ");

  resp.innerText = `Crachá: ${nome.substr(0, primeiroEspaco)} ${nome.substr(
    ultimoEspaco
  )}`;
});
