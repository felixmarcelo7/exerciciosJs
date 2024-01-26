const frm = document.querySelector("form");
const respErro = document.querySelector("#outRespErro");
const respChance = document.querySelector("#outRespChances");
const respDica = document.querySelector("#outRespDica");

const erros = [];
let chances = 6;
const sorteado = Math.floor(Math.random() * 100) + 1 //número aleatório ente 1 e 100

frm.addEventListener("submit", e => {
    e.preventDefault();

    const numAposta = Number(frm.inNumero.value);
    
    if(numAposta != sorteado) {// verifica se o núemro apostado está errado
        if(erros.includes(numAposta)) { //verifica se o número ja foi apostado
            alert(`Você ja apostou o número ${numAposta}. Tente outro...`);
            return;
        };

        let dica = numAposta < sorteado ? "maior" : "menor";

        erros.push(numAposta);
        respErro.innerText = `${erros.length} (${erros.join(", ")})`;
        chances--;
        respChance.innerText = chances;
        respDica.innerText = `Dica: Tente um número ${dica} que ${numAposta}`;

        if(chances == 0) {
            alert("Suas chances acabaram...");
            respDica.innerText = `Game Over!! Número Sorteado: ${sorteado}`;
            frm.btSubmit.disabled = true;
            frm.btNovo.className = "exibe";
        };
        
    } else {
        respDica.innerText = `Parabéns, Você Acertou!! Número sorteado: ${sorteado}`;
        frm.btSubmit.disabled = true; //desabilita o botão de aposta
        frm.btNovo.className = "exibe";
    };

    frm.inNumero.value = "";
    frm.inNumero.focus();

}); 

frm.btNovo.addEventListener("click", () => {
    location.reload(); //recarrega a página
});
