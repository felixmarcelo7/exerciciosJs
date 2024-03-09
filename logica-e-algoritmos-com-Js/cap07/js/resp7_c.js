const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const dataInfracao = frm.inData.value;
  const dataInfraForm = dataInfracao.split("-");
  const [ano, mes, dia] = dataInfraForm;

  const valor = Number(frm.inValor.value);

  const dataLimite = new Date();
  dataLimite.setDate(dia);
  dataLimite.setMonth(mes - 1);
  dataLimite.setFullYear(ano);
  dataLimite.setDate(dataLimite.getDate() + 90);

  const diaLim = dataLimite.getDate();
  const mesLim = dataLimite.getMonth() + 1;
  const anoLim = dataLimite.getFullYear();

  const diaZero = diaLim < 10 ? "0" + diaLim : diaLim;
  const mesZero = mesLim < 10 ? "0" + mesLim : mesLim;

  resp.innerText = `Data Limite para Pagamento com Desconto: ${diaZero}/${mesZero}/${anoLim}\n`;
  resp.innerText += `\nValor com Desconto R$${(valor - valor * 0.2).toFixed(
    2
  )}`;

});
