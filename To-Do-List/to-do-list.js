const formEl=document.querySelector(".form");
const inputEl=document.querySelector(".input");
const ulEl=document.querySelector(".list")
let list = JSON.parse(localStorage.getItem("list")); 

list.forEach(task=>{
    toDoList(task)
})
formEl.addEventListener("submit",(event)=>{
    event.preventDefault();
    toDoList()
});

function toDoList(task){
    let newTask=inputEl.value
    if (task){
        newTask=task.name
    }
    
    const liEl=document.createElement("li");   
    if (task && task.checked){
        liEl.classList.add("checked");
    }               
    liEl.innerText=newTask;
    ulEl.appendChild(liEl)
    inputEl.value=""
    const checkEl=document.createElement("div")
    checkEl.innerHTML=`<i class="fa-regular fa-square-check"></i>`
    liEl.appendChild(checkEl);

    const trashEl=document.createElement("div")
    trashEl.innerHTML=`<i class="fa-solid fa-trash"></i>`
    liEl.appendChild(trashEl);
    checkEl.addEventListener("click",()=>{
    liEl.classList.toggle("checked");
    updateLocalStorage();
})
    trashEl.addEventListener("click",()=>{
        liEl.remove();
        updateLocalStorage();
    });
    updateLocalStorage();
}
function updateLocalStorage(){
    const liEls=document.querySelectorAll("li")
    list=[]
    liEls.forEach(liEl=>{
        list.push({
            name: liEl.innerText,
            checked: liEl.classList.contains("checked")
        })
    })
    localStorage.setItem("list",JSON.stringify(list));
}

