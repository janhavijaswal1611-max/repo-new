const btnEL= document.querySelector(".btn")
const inputEL = document.getElementById("input")
const copyIconEl = document.querySelector(".fa");
btnEL.addEventListener("click", () => { createPassword(); });
copyIconEl.addEventListener("click",()=>{
    copyPassword();
})
function createPassword(){
    const chars="1234567890!@#$%^&*()-=_+[]{}\|';/?.,><QWERTYUIOPLKJHGFDSAZXCVBNM";
    const passwordLength = 14;
    let password="";
    for (let index = 0; index < passwordLength; index++) {
        const randomNum=Math.floor(Math.random()*chars.length);
        password+=chars.substring(randomNum,randomNum+1);
        console.log(randomNum,password);
        
    }
    inputEL.value=password;
}
function copyPassword(){
    inputEL.select();
    inputEL.setSelectionRange(0,9999);
    navigator.clipboard.writeText(inputEL.value);
    alert("Password copied");
}
