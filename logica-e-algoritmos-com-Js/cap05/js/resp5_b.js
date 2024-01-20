const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", e => {
    e.preventDefault();

    let numChin = Number(frm.inNum.value);//número de chinchilas
    const numAnos= Number(frm.inAnos.value);
    
    if(numChin < 2) {
        alert("O número de Chinchilas deve ser de no mínimo 2");
        frm.reset();
        resp.innerText = "";
    } else {

        for(let i = 1; i <= numAnos; i++) {
            resp.innerText += `${i}° Ano: ${numChin} Chinchilas\n`;
            numChin = numChin * 3; 
        };
    };

});
