const currencyFirstEl =document.getElementById("currency-first")

const worthFirstEl=document.getElementById("worth-first")

const currencySecondEl=document.getElementById("currency-second")

const worthSecondEl=document.getElementById("worth-second")

const exchangeRateEl=document.getElementById("exchange-rate")

function updateRate(){
    fetch(`https://v6.exchangerate-api.com/v6/f1dfbaac8f72f9197cd0ea36/latest/${currencyFirstEl.value}`).then((res)=>res.json()).then((data)=>{
    const rate = data.conversion_rates[currencySecondEl.value];
    console.log(rate);
    exchangeRateEl.innerText=`1${currencyFirstEl.value}=${currencySecondEl.value}`;
    worthSecondEl.value=(worthFirstEl.value *rate).toFixed(3)
    });
}

currencyFirstEl.addEventListener("change",updateRate)

currencySecondEl.addEventListener("change",updateRate)

worthFirstEl.addEventListener("input",updateRate)

worthSecondEl.addEventListener("input",updateRate)