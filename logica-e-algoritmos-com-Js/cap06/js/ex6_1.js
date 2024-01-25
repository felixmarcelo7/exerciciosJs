const frm = document.querySelector("form");
const respNome = document.querySelector("span");
const respLista = document.querySelector("pre");

const pacientes = [];

const criarLista = () => {
    let lista = "";
    pacientes.forEach((nome, i) => {
        lista += `${i + 1}. ${nome}\n`; //cria a lista de pacientes
    });

    respLista.innerText = lista;
    frm.reset();
    frm.inPaciente.focus();
}

frm.addEventListener("submit", e => {
    e.preventDefault();

    const paciente = frm.inPaciente.value;
    pacientes.push(paciente); //adiciona à ultima posição da lista

    criarLista();
});

frm.btnUrgencia.addEventListener("click", () => {

    if(!frm.checkValidity()) { //verifica se as validações do form estão ok
        alert("Informe o nome do paciente a ser atendido em caráter de urgência");
        frm.inPaciente.focus();
        return;
    };

    const paciente = frm.inPaciente.value;
    pacientes.unshift(paciente); //joga o paciente para o começo da lista

    criarLista();
});

frm.btnAtender.addEventListener("click", () => {
    
    if(pacientes.length == 0) {
        alert("Não há pacientes na lista de espera!");
        frm.inPaciente.focus();
        respNome.innerText = "";
        return;
    };

    const atender = pacientes.shift(); //remove o primeiro da lista
    respNome.innerText = atender;

    criarLista();
});
