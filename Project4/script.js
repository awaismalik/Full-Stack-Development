// Get DOM Elements
const currencyOne = document.getElementById('currency-one');
const amountCurrencyOne = document.getElementById('amount-one');

const currencyTwo = document.getElementById('currency-two');
const amountCurrencyTwo = document.getElementById('amount-two');


const rate = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch Exchange Rate & update the DOM

function calculate() {
    // Get the currency code for currency 1 & 2
    const currencyOneCode = currencyOne.value;
    const currencyTwoCode = currencyTwo.value;
    // Send request to Exchange-API for conversion rates for currency one
    fetch(`https://v6.exchangerate-api.com/v6/b2645d7de9d191649fab4895/pair/${currencyOneCode}/${currencyTwoCode}`)
        .then(res => res.json())
        .then(data => {
            // Get the Conversion rate from currency one to currency two
            const conversionRate = data.conversion_rate;
            // update the DOM to display the conversion rate
            rate.innerText = `1 ${currencyOneCode} = ${conversionRate} ${currencyTwoCode}`;
            // Formatting Currency Two Amount
            const amount2 = new Intl.NumberFormat('en-US', { style: 'currency', currency: currencyTwoCode }).format((amountCurrencyOne.value * conversionRate).toFixed(2));
            // Update the currency tow amount
            amountCurrencyTwo.value = amount2;
        });

};

// Event Listener
// Recalculate exchange rate when currency 1 changes
currencyOne.addEventListener('change', calculate);
// Recalculate exchange amount when currency 1 amount changes
amountCurrencyOne.addEventListener('input', calculate);
// Recalculate exchange rate when currency 2 changes
currencyTwo.addEventListener('change', calculate);
// Recalculate exchange amount when currency 2 amount changes
amountCurrencyTwo.addEventListener('input', calculate);

swap.addEventListener('click', () => {
    // Save value of currency one code to temp variable
    const temp = currencyOne.value;
    // Copy currency two code to currency one
    currencyOne.value = currencyTwo.value;
    // copy currency one code from Temp variable to currency Tow
    currencyTwo.value = temp;
    // Recalculate exchange rate after swap
    calculate();

})

// Execute Calculate Function
calculate();
