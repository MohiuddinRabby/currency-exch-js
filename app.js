const curr_one = document.getElementById('curr-one');
const curr_two = document.getElementById('curr-two');
const input_value = document.getElementById('input-value');
const result = document.getElementById('result')

function calculateResult(){
const currOneValue = curr_one.value;
const currTwoValue = curr_two.value;
fetch(`https://api.ratesapi.io/api/latest?base=${currOneValue}`)
.then(res=>res.json())
.then(data=>{
    const rate = data.rates[currTwoValue];
result.innerText=(input_value.value * rate).toFixed(2);
});
}
//add event listeners
curr_one.addEventListener("change",calculateResult)
curr_two.addEventListener('change',calculateResult)
input_value.addEventListener('input',calculateResult)
calculateResult();

