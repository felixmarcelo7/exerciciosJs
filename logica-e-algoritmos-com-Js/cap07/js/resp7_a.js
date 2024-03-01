const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const mensagem = frm.inMensagem.value.toLowerCase();

  let caracterPosPar = "";
  let caracterPosImpar = "";

  for (let i = 0; mensagem.length > i; i++) {
    if (i % 2 == 0) {
      caracterPosImpar += mensagem[i];
    } else {
      caracterPosPar += mensagem[i];
    }
  }

  resp.innerText = `${caracterPosPar}${caracterPosImpar}`;
  frm.inMensagem.focus();
  frm.inMensagem.value = "";
});

frm.btDescrip.addEventListener("click", () => {
  if (!frm.checkValidity()) {
    alert("Informe a mensagem criptografada");
    frm.inMensagem.focus(); // posiciona o cursor no campo
    return; // retorna ao form
  }

  const mensagem = frm.inMensagem.value.toLowerCase();
  const menPrt1 = mensagem.substr(0, mensagem.length / 2);
  const menPrt2 = mensagem.substr(mensagem.length / 2);

  let menDescript = "";
  if (mensagem.length % 2 == 0) {
    for (let i = 0; i < menPrt2.length; i++) {
      menDescript += menPrt2.charAt(i);
      menDescript += menPrt1.charAt(i);
    }
  } else {
    for (let i = 0; i < menPrt2.length - 1; i++) {
      menDescript += menPrt2.charAt(i);
      menDescript += menPrt1.charAt(i);
    }

    menDescript += menPrt2.charAt(menPrt2.length - 1);
  }

  resp.innerText = menDescript;

  frm.reset();
  frm.inMensagem.focus();
});
