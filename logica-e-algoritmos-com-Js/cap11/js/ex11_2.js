const frm = document.querySelector("form");
const dvPalco = document.querySelector("#divPalco");

const POLTRONAS = 240; //const com o número de poltronas do teatro
const reservadas = []; //vetor com as poltronas reservadas pelos clientes

window.addEventListener("load", () => {
//operador ternário: se houver dados salvos em localStorage, faz um split(";") e
//atribui esses dados ao array, caso contráruio, o array é inicializado vazio
const ocupadas = localStorage.getItem("teatroOcupadas") 
    ? localStorage.getItem("teatroOcupadas").split(";") 
    : [];

    //repetição para montar o n° de poltonas
    for(let i = 1; i <= POLTRONAS; i++) {
        const figure = document.createElement("figure");
        const imgStatus = document.createElement("img");

        //se a posição const em ocupadas, exibe a imgem ocupada, se não, disponível
        imgStatus.src = ocupadas.includes(i.toString()) 
            ? "img/ocupada.jpg"
            : "img/disponivel.jpg";
            
        imgStatus.className = "poltrona"; //classe com dimensão da img
        const figureCap = document.createElement("figcation");
        figureCap.style = "display: flex";

        //quantidade de zeros antes do número da poltrona
        const zeros = i < 10 ? "00" : i < 100 ? "0" : "";

        const num = document.createTextNode(`[${zeros}${i}]`);

        figureCap.appendChild(num);
        figure.appendChild(imgStatus);
        figure.appendChild(figureCap);

        //se i módulo 24 == 12 (é o corredor: define margem direita 60px)
        if(i % 12 == 0) figure.style.marginRight = "60px";

        dvPalco.appendChild(figure); //indica que firure é filha de dvPalco

        //se i modulo 24 == 0: o comando após && será executado (insere quebra de linha)
        (i % 24 == 0) && dvPalco.appendChild(document.createElement("br"));
        
    }
});

