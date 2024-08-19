const frm = document.querySelector("form");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const palavra = frm.inPalavra.value;
  const dica = frm.inDica.value;

  //valida a palavra que sera cadastrada
  if (palavra.includes(" ")) {
    alert("Deve ser apenas uma Palavra. Tente outra!");
    frm.reset();
    return;
  }

  //salva no localStorage
  if (localStorage.getItem("palavrasCadas")) {
    localStorage.setItem(
      "palavrasCadas",
      localStorage.getItem("palavrasCadas") + ";" + palavra
    );
    localStorage.setItem(
      "dicasCadas",
      localStorage.getItem("dicasCadas") + ";" + dica
    );
  } else {
    localStorage.setItem("palavrasCadas", palavra);
    localStorage.setItem("dicasCadas", dica);
  }

  //verifica se salvou
  if (localStorage.getItem("palavrasCadas")) {
    alert(`Ok! Palavra ${palavra} Cadastrada com Sucesso!`);
  }

  frm.reset();
  frm.inPalavra.focus();
});

