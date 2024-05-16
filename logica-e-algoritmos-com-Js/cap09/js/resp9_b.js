const frm = document.querySelector("form");
const respLista = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const produto = frm.inProduto.value; //obtém o produto

  if (localStorage.getItem("produtos")) {
    //se já houver produtos a lisat
    const produtos = `${localStorage.getItem("produtos")};${produto}`; //adiciona ";" e o novo produto
    localStorage.setItem("produtos", produtos);
  } else {
    // se não, apenas cria a chave e o primeiro produto
    localStorage.setItem("produtos", produto);
  }

  frm.reset();
  mostrarLista();
});

const mostrarLista = () => {
  const produtosArr = localStorage.getItem("produtos").split(";").sort();
  //pega o a lista do localStorage tranforma em um array e ordena

  let lista = "";

  for (const produto of produtosArr) {
    lista += produto + "\n"; //cria a lista
  }

  //mostra a lisa
  respLista.innerText = "Produtos Adicionados\n";
  respLista.innerText += "--------------------\n";
  respLista.innerText += lista;
};

frm.btLimpar.addEventListener("click", () => {
  //solicita confirmação para excluir a lista
  if (confirm("Confirma excluir a lista?")) {
    localStorage.removeItem("produtos");
  }
  respLista.innerText = "";
});
