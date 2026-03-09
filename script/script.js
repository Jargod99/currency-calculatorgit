{
    function Hello() {
        console.log("Hello world")
    };

    const resultToHtmlText = (amount, result, currency) => {
        const resultElemnet = document.querySelector(".js-result");
        resultElemnet.innerHTML = `Wynik: ${amount} [ PLN ] = ${result.toFixed(2)}  [ ${currency} ]`;
    };

    const calculate = (currency, amount) => {
        const rateUSD = 3;
        const rateEUR = 4;
        const rateGBP = 5;
        switch (currency) {
            case "USD":
                return amount / rateUSD;

            case "EUR":
                return amount / rateEUR;

            case "GBP":
                return amount / rateGBP;

        };
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const amountElemnet = document.querySelector(".js-amount");
        const currencyElemnet = document.querySelector(".js-currency");

        const amount = +amountElemnet.value;
        const currency = currencyElemnet.value;
        const result = calculate(currency, amount);
        resultToHtmlText(amount, result, currency);
    };

    const init = () => {
        const formElemnet = document.querySelector(".js-form");
        formElemnet.addEventListener("submit", onSubmit);
        Hello();
    };

    init();

}
