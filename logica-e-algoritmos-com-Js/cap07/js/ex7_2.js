const frm = document.querySelector("form");
const resp = document.querySelector("span");

frm.addEventListener("submit", e => {
    e.preventDefault();

    const fruta = frm.inFruta.value.toUpperCase();

    let dica = "";
    for(const letra of fruta) {
        if(letra == fruta.charAt(0)) {
            dica += letra;
        } else {
            dica += "_";
        }
    }

    resp.innerText = dica;
    frm.inFruta.value = "*".repeat(fruta.length);
});
