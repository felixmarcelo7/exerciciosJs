const frm = document.querySelector("form");
const dvMoedas = document.querySelector("#divMoedas");

const criarMoedas = (num, moeda, textAlt, classe) => {
    //cria laço de repetição para inserir várias imagens
    for(let i = 1; i <= num; i++) {
        const novaMoeda = document.createElement("img");
        novaMoeda.src = `img/${moeda}`;
        novaMoeda.alt = textAlt;
        novaMoeda.className = classe;
        dvMoedas.appendChild(novaMoeda);
    }

    const br = document.createElement("br");
    dvMoedas.appendChild(br);
}

window.addEventListener("load", () => {
    //gerar números aleatórios, entre 1 e 5, para cada moeda
    const num1_00 = Math.ceil(Math.random() * 5);
    const num0_50 = Math.ceil(Math.random() * 5);
    const num0_25 = Math.ceil(Math.random() * 5);
    const num0_10 = Math.ceil(Math.random() * 5);

    //define texto altertnativo das imagens
    const alt1_00 = "Moedas de um real";
    const alt0_50 = "Moedeas de Cinquenta Centavos";
    const alt0_25 = "Moedas de Vinte e Cinco Centavos";
    const alt0_10 = "Moedas de Dez Centavos";

    criarMoedas(num1_00, "1_00.jpg", alt1_00, "moeda1-00");
    criarMoedas(num0_50, "0_50.jpg", alt0_50, "moeda0-50");
    criarMoedas(num0_25, "0_25.jpg", alt0_25, "moeda0-25");
    criarMoedas(num0_10, "0_10.jpg", alt0_10, "moeda0-10");
});

frm.addEventListener("submit", e => {
    e.preventDefault();

    const soma = frm.inSoma.value;
    const moedas = document.querySelectorAll("img");
    let totalMoedas = 0;

    for(const moeda of moedas) { //verifica qual moeda está mostrando
        switch(moeda.className) {//conta conforme o valor da moeda
            case "moeda1-00":
                totalMoedas += 1;
                break;
            case "moeda0-50":
                totalMoedas += 0.5;
                break;
            case "moeda0-25":
                totalMoedas += 0.25;
                break;
            case "moeda0-10":
                totalMoedas += 0.10;
                break;  
        }
    }

    const div = document.createElement("div");
    const h3 = document.createElement("h3");

    let mensagem;
    //verifica se o valor informado é igual ao de moedas exibido
    if(soma == totalMoedas.toFixed(2)) {
        div.className = "alert alert-success";
        mensagem = "Parabéns!! Você Acertou!"
    } else {
        div.className = "alert alert-danger";
        mensagem = `Ops... A resposta correta é ${totalMoedas.toFixed(2)}`;
    }

    const texto = document.createTextNode(mensagem);
    h3.appendChild(texto);
    div.appendChild(h3);
    dvMoedas.appendChild(div);

    frm.submit.disabled = true; //desabiliat botão

});