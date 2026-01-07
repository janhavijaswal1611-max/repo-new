const btnEl= document.getElementById('btn');
const inputEl=document.getElementById("bmiresult");
const weightcondition=document.getElementById("weight-condition");
btnEl.addEventListener("click",calculateBmi);
function calculateBmi(){
    const heightCm = Number(document.getElementById("wt").value);
    const weightValue = Number(document.getElementById("hi").value);

    const heightMeter = heightCm / 100;

    const bmiValue = weightValue / (heightMeter * heightMeter);

    inputEl.value = bmiValue.toFixed(2);

    if (bmiValue < 18.5) {
        weightcondition.innerText = "Underweight";
    } else if (bmiValue < 24.9) {
        weightcondition.innerText = "Normal";
    } else if (bmiValue < 29.9) {
        weightcondition.innerText = "Overweight";
    } else {
        weightcondition.innerText = "Obesity";
    }
}
     

