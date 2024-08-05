const frm = document.querySelector("form");
const respCavalo = document.querySelector("#outCavalo");
const listaCavalos = document.querySelector("pre");

const CAVALOS = ["Marujo", "Tordilho", "Belga", "Twister", "Jade", "Lucky"];

const apostas = [];

const obterCavalo = numCavalo => { //pega o nome do cavalo que vai apostar
    const cavalo = numCavalo - 1;
    return CAVALOS[cavalo];
};

const quantApostas = (numCavalo) => { //conta a quantidade de apostas que foram feitas no cavalo
    let cont = 0;

    apostas.forEach((aposta) => {
        if (aposta.numCavalo == numCavalo) {
            cont++;
        }
    });

    return cont;
};

const somaApostas = (numCavalo) => { // soma as apostas feitas no cavalo escolhido
    let soma = 0;

    apostas.forEach((aposta) => {
        if (aposta.numCavalo == numCavalo) {
            soma += aposta.valAposta;
        }
    });

    return soma;
};

const validaCavalo = (numCavalo) => { // se a aposta for em um número maior que o de cavalos retorna falso

    if (numCavalo <= CAVALOS.length && numCavalo > 0) {
        return true;
    }

    return false;
}

frm.addEventListener("submit", e => {
    e.preventDefault();

    const numCavalo = Number(frm.inCavalo.value);
    const valAposta = Number(frm.inAposta.value);

    apostas.push({ numCavalo, valAposta }); //adicionando dentro do objeto

    listaCavalos.innerText = `Apostas Realizadas\n${"-".repeat(25)}\n`;

    let lista = "";
    for (const aposta of apostas) {
        const { numCavalo, valAposta } = aposta;
        lista += `Nº ${numCavalo} ${obterCavalo(numCavalo)} - R$: ${valAposta.toFixed(2)}\n`; //cria a lista de apostas
    }

    listaCavalos.innerText += lista;//mostra a lista na tela
    frm.reset();
    frm.inCavalo.focus();
    respCavalo.innerText = "";
});

frm.inCavalo.addEventListener("blur", () => {
    //mostra o nome do cavalo que vai ser apostado e o total de apostas
    const numCavalo = Number(frm.inCavalo.value);

    if (numCavalo == "") {
        respCavalo.innerText = "";
        return;
    }

    if (!validaCavalo(numCavalo)) {
        alert(`Número inválido. Tente novamente! Apenas ${CAVALOS.length} cavalos no páreo`);
        respCavalo.innerText = "";
        return;
    }

    respCavalo.innerText = `${obterCavalo(numCavalo)} (Apostas: ${quantApostas(numCavalo)} -`;
    respCavalo.innerText += ` R$: ${somaApostas(numCavalo).toFixed(2)})`;
});

frm.btResumo.addEventListener("click", () => {
    const somaApostas = [];

    for (let i = 0; i < CAVALOS.length; i++) {
        somaApostas.push(0);
    }

    for (const aposta of apostas) {
        const { numCavalo, valAposta } = aposta;
        somaApostas[numCavalo - 1] += valAposta;
    }

    let resumoApostas = `Nº Cavalo.............. R$ Apostado\n${"-".repeat(35)}\n`;

    CAVALOS.forEach((cavalo, i) => {
        resumoApostas += `${i + 1} ${cavalo.padEnd(20)} ${somaApostas[i].toFixed(2).padStart(11)}\n`;
    });

    listaCavalos.innerText = resumoApostas;
});
