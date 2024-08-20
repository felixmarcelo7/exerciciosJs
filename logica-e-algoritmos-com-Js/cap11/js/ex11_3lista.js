const tbPalavras = document.querySelector("table");
const ckMostrar = document.querySelector("input[type='checkbox']");

const mostrarTabela = () => {
    //se houver dados salvos em localStorage
    if(localStorage.getItem("palavrasCadas")) {
        //obtém conteúdo e coverte em elementos de vetor
        const palavras = localStorage.getItem("palavrasCadas").split(";");
        const dicas = localStorage.getItem("dicasCadas").split(";");

        //percorre elementos do vetor e os insere na tabela
        for(let i = 0; i < palavras.length; i++) {
            const linha = tbPalavras.insertRow(-1); //adiciona uma linha na tabela

            const col1 = linha.insertCell(0); //cria colunas na linha inserida
            const col2 = linha.insertCell(1);
            const col3 = linha.insertCell(2);

            col1.innerText = palavras[i]; //joga um conteúdo em cada célula
            col2.innerText = dicas[i];
            col3.innerHTML = "<i class='exclui' title='Excluir'>&#10008;</i>";
        }
    }
};

//ocorre quanmdo o chekbos é alterado. Exibe a lista se marcado, senão, recarrega
ckMostrar.addEventListener("change", () => {
    ckMostrar.checked ? mostrarTabela() : window.location.reload();
});

tbPalavras.addEventListener("click", e => {
    //se a classe do elemento alvo clicado contém exclui
    if(e.target.classList.contains("exclui")) {
        //acessa o pai do pai do elemento alvo, e obtém o texto do 1° filho
        const palavra = e.target.parentElement.parentElement.children[0].innerText;

        if(confirm(`Confirma Exclusão da Palavra: ${palavra}`)) {
            //remove a linha da tabela, correspondente ao simbolo de excluir clicado
            e.target.parentElement.parentElement.remove();

            localStorage.removeItem("palavrasCadas"); //exclui dados de localStorage
            localStorage.removeItem("dicasCadas");
    
            const palavras = [];
            const dicas = [];
    
            //obtém os dados da tabela, acrescendo-os aos vetores
            for(let i = 1; i < tbPalavras.rows.length; i++) {
                palavras.push(tbPalavras.rows[i].cells[0].innerText);
                dicas.push(tbPalavras.rows[i].cells[1].innerText);
            }
    
            //salva o conteúdo dos vetores em localStorage
            localStorage.setItem("palavrasCadas", palavras.join(";"));
            localStorage.setItem("dicasCadas", dicas.join(";"));
        }
    }
});