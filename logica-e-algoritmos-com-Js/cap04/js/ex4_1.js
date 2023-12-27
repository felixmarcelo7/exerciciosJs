const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const aluno = frm.inAluno.value;
    const nota1 = Number(frm.inNota1.value);
    const nota2 = Number(frm.inNota2.value);

    const media = (nota1 + nota2) / 2;

    resp1.innerText = `Média das Notas ${media.toFixed(1)}`;

    if(media >= 7) {
        resp2.innerText = `Parabéns ${aluno}! Você foi aprovado(a).`;
        resp2.style.color = "blue";
    } else {
        resp2.innerText = `Ops... ${aluno}! Você foi reprovado(a).`;
        resp2.style.color = "red";
    };

});
