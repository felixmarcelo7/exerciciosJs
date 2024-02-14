const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = frm.inNome.value.trim();

  const arrNome = nome.split(" ");

  const email = `${arrNome[0].charAt(0)}${arrNome[1].charAt(0)}${
    arrNome[arrNome.length - 1]
  }@empresa.com.br`;

  resp.innerText = email.toLowerCase();
});
