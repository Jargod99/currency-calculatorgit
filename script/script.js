const formElemnet = document.querySelector(".js-form");
const amountElemnet = document.querySelector(".js-amount");
const currencyElemnet = document.querySelector(".js-currency");
const resultElemnet = document.querySelector(".js-result");
const currencyElemnet2 = document.querySelector(".js-currency");

formElemnet.addEventListener("submit", (e) => {
    e.preventDefault();

    let result;
    const rateUSD = 3;
    const rateEUR = 4;
    const rateGBP = 5;
    const amount = +amountElemnet.value;
    const currency = currencyElemnet.value;
    switch (currency) {
        case "USD":
            result = amount / rateUSD;
            break;
        case "EUR":
            result = amount / rateEUR;
            break;
        case "GBP":
            result = amount / rateGBP;
            break;
    };
    resultElemnet.innerHTML = `Wynik: ${amount} [ PLN ] = ${result.toFixed(2)}  [ ${currency} ]`;
});