const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", e => {
    e.preventDefault();

    const num = Number(frm.inNumero.value);
    let tabuada = "";

    for(let i = 1; i < 10; i++ ) {
        tabuada += `${num} x ${i}  = ${num * i}\n`;
    };

    tabuada += `${num} x 10 = ${num * 10}`;

    resp.innerText = tabuada;
});