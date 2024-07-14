const frm = document.querySelector("form");
const divForm = document.querySelector("#div__form");

frm.addEventListener("submit", e => {
    e.preventDefault();

    const idade = frm.inIdade.value; //pega a idade
    const numeros = idade.split("");//separa números em um array
    
    numeros.forEach(num => {
        const img = document.createElement("img");
        img.src = `./img/${num}.jpg`;
        img.alt = `Vela de ${num} anos`;
        divForm.appendChild(img);
    }); 

    frm.reset();
    
});

frm.btNovasVelas.addEventListener("click", () => {
    location.reload(); //recarrega
});

