const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", e => {
    e.preventDefault();

    const fruta = frm.inFruta.value;
    const num = Number(frm.inNum.value);

    let accFruta = fruta;
    for(let i = 1; i < num; i++) {
        accFruta += "*" + fruta;
    };

    resp.innerText = accFruta;

});
