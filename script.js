
    function convertCurrency() {
        const amount = document.getElementById("amount").value;
        const fromCurrency = document.getElementById("fromCurrency").value;
        const toCurrency = document.getElementById("toCurrency").value;

        const exchangeRates = {
            "INR": {"USD": 0.012, "EUR": 0.011},
            "USD": {"INR": 83.14, "EUR": 0.89},
            "EUR": {"USD": 1.12, "INR": 86.02}
        };

        const conversionRate = exchangeRates[fromCurrency][toCurrency];
        const result = (amount * conversionRate).toFixed(2);

        document.getElementById("result").innerHTML = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
    }
