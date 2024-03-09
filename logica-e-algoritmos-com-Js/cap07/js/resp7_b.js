const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const frase = frm.inFrase.value.trim().toUpperCase();

  const fraseInvertida = [...frase].reverse().join("").replace(/ /g, "");
  const frase2 = frase.replace(/ /g, "");

  let flag = "é Palindromo";
  for (let i = 0; frase2.length / 2 > i; i++) {
    if (frase2.at(i) === fraseInvertida.at(i)) {
        flag = flag;
    } else {
        flag = "não é Palíndomo"
    }
  }

  resp.innerText = `${frase} ${flag}`;

  frm.reset();
});
