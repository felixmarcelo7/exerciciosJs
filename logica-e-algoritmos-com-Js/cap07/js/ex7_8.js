const frm = document.querySelector("form");

const TAXA_MULTA = 2 / 100;
const TAXA_JUROS = 0.33 / 100;

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const dataVenc = frm.inData.value;
  const valorConta = Number(frm.inValor.value);
  const dataVencArr = dataVenc.split("-");
  const [anoVenc, mesVenc, diaVenc] = dataVencArr;

  const hoje = new Date();
  const dataVencForm = new Date(); //data de vencimento Formatada
  dataVencForm.setDate(diaVenc);
  dataVencForm.setMonth(mesVenc - 1);
  dataVencForm.setFullYear(anoVenc);

  const diasAtraso = (hoje - dataVencForm) / 86400000; //dividindo por 86400000 converte de ms para dias
  let valorMulta = 0;
  let valorJuros = 0;

  if (diasAtraso >= 1) {
    valorMulta = valorConta * TAXA_MULTA;
    valorJuros = valorConta * TAXA_JUROS * diasAtraso;
  }

  const valorTotal = valorConta + valorMulta + valorJuros;

  frm.outMulta.value = valorMulta.toFixed(2);
  frm.outJuros.value = valorJuros.toFixed(2);
  frm.outTotal.value = valorTotal.toFixed(2);
});
