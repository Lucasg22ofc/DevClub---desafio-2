function clicar() {
  const valorInput = document.querySelector(".input-currency").value;
  const moedaDestino = document.getElementById("moeda-destino").value;

  const valor = parseFloat(valorInput.replace(",", "."));
  const currencyValueToCurrency = document.querySelector(".currency-value-to-currency");
  const currencyValue = document.querySelector(".currency-value");
  const currencyDestinoNome = document.querySelectorAll(".currency")[1]; // segundo ".currency" é o destino

  const cotacoes = {
    dolar: 5.25,
    euro: 5.70
  };

  if (!valor || isNaN(valor)) {
    alert("Por favor, insira um valor válido!");
    return;
  }

  const valorConvertido = valor / cotacoes[moedaDestino];

  currencyValueToCurrency.innerHTML = `R$ ${valor.toFixed(2).replace(".", ",")}`;

  if (moedaDestino === "dolar") {
    currencyValue.innerHTML = `US$ ${valorConvertido.toFixed(2)}`;
    currencyDestinoNome.innerHTML = "Dólar";
    document.querySelectorAll(".currency-box img")[1].src = "./imagem/logo-EUA.png";
  } else if (moedaDestino === "euro") {
    currencyValue.innerHTML = `€ ${valorConvertido.toFixed(2)}`;
    currencyDestinoNome.innerHTML = "Euro";
    document.querySelectorAll(".currency-box img")[1].src = "./imagem/logo-EURO.png";
  }
}
