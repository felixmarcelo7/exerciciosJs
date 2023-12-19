const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nomeFilme = frm.inFilme.value;
    const duracao = Number(frm.inDuracao.value);

    const horas = Math.floor(duracao / 60);
    const minutos = duracao % 60;

    resp1.innerText = nomeFilme;
    resp2.innerText = `${horas} hora(s) e ${minutos} minuto(s)`;
    
});