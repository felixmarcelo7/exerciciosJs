const frm = document.querySelector("form");
const respLista = document.querySelector("pre");

frm.addEventListener("submit", e => {
    e.preventDefault();

    const nome = frm.inNome.value;
    const peso = Number(frm.inPeso.value);

    //chama a function que verifica se o peso já foi apostado
    if(verApostaExiste(peso)) {
        alert("alguém já apostou este peso, infome outro...");
        frm.inPeso.focus();
        return;
    }

    if(localStorage.getItem("melanciaNome")) {// se houver em localStorage
        //obtém o conteúdo já salvo e acrescenta ";" + dados da aposta
        const melanciaNome = `${localStorage.getItem("melanciaNome")};${nome}`;
        const melanciaPeso = `${localStorage.getItem("melanciaPeso")};${peso}`;
        localStorage.setItem("melanciaNome", melanciaNome); //salva dados
        localStorage.setItem("melanciaPeso", melanciaPeso);
    } else { //se não, é a primeira aposta
        localStorage.setItem("melanciaNome", nome); //salva os dados (sem ";")
        localStorage.setItem("melanciaPeso", peso);
    }

    frm.reset();
    frm.inNome.focus();
    mostrarApostas();
});

const verApostaExiste = (peso) => {
    if(localStorage.getItem("melanciaPeso")) { //se exixtir dados em localStorage
        //obtém seu conteúdo e a string é dividida em itens de vetor a cada ";"
        const pesos = localStorage.getItem("melanciaPeso").split(";");

        //o peso deve ser convertido em string, pois o vetor contém stings
        return pesos.includes(peso.toString());
    } else {
        return false;
    }
};

const mostrarApostas = () => {
    //se não há apostas armazenadas em localStorage
    if(!localStorage.getItem("melanciaNome")) {
        //limpa o espaço de exibição das apostas (para quando "Limpar Apostas")
        respLista.innerText = "";
        return; // não executa os comandos abaixo
    }

    //obtém o comando das variáveis salvas no localStorage, separando-as
    //em elementos de vetor a cada ocorrência do ";"
    const nomes = localStorage.getItem("melanciaNome").split(";");
    const pesos = localStorage.getItem("melanciaPeso").split(";");

    let linhas = ""; //acumula as linhas a serem exibidas

    //repetição para percorrer todas as ocorências do vetor
    for(let i = 0; i < nomes.length; i++) {
        //concatena em linhas os nomes dos apostadores e suas respostas
        linhas += `${nomes[i]} - ${pesos[i]}gr\n`;
    };

    //exibe as linhas
    respLista.innerText = linhas;
};

frm.btVencedor.addEventListener("click", () => {
    //se não há apostas em localStorage
    if(!localStorage.getItem("melanciaNome")) {
        alert("Não há apostas cadastradas");
        return; //não executa os comandos abaixo
    }

    //solicita o peso correto da melancia
    const pesoCorreto = Number(prompt("Qual o peso da melancia?"));

    //se não informou retorna
    if(pesoCorreto == 0 || isNaN(pesoCorreto)) {
        return;
    }

    //obtém os dados armazenados, separando-os em elementos de vetor
    const nomes = localStorage.getItem("melanciaNome").split(";");
    const pesos = localStorage.getItem("melanciaPeso").split(";");

    //valor inicial para o vencedor é o da primeira aposta
    let vencedorNome = nomes[0];
    let vencedorPeso = Number(pesos[0]);

    //percorre as apostas
    for(let i = 1; i < nomes.length; i++) {
        //calcula a diferença de peso do "vencedor" e da aposta atual
        const difVencedor = Math.abs(vencedorPeso - pesoCorreto); 
        const difAposta = Math.abs(Number(pesos[i]) - pesoCorreto); 
        //se a diferença da aposta atual (no for) for menor que a do "vencedor"
        if(difAposta < difVencedor) {
            vencedorNome = nomes[i];         //troca o "vencedor"
            vencedorPeso = Number(pesos[i]); //para este elemento
        }
    };

    //monta mensagem com os dados do vencedor
    let mesagem = `Resultado - Peso Correto: ${pesoCorreto}gr`;
    mesagem += `\n${"-".repeat(50)}`;
    mesagem += `\nVencedor: ${vencedorNome}`;
    mesagem += `\nAposta: ${vencedorPeso}gr`;
    alert(mesagem);

});

frm.btLimpar.addEventListener("click", () => {
    //solicita confirmação para excluir as apostas
    if(confirm("Confirma a exclusão de todas as apostas?")) {
        localStorage.removeItem("melanciaNome"); //remove as variáveis salvas
        localStorage.removeItem("melanciaPeso"); //em localStorage
        mostrarApostas(); //exibe a lista vazia
    }
});

//chama a function quando a página é carregada, para mostrar apostas salvas
window.addEventListener("load", mostrarApostas);
