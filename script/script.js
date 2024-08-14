const inputBox= document.getElementById("input-box");
const listtem= document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You Need To Write");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listtem.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
listtem.addEventListener("click" , function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();

    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listtem.innerHTML);
}

function showTask(){
    listtem.innerHTML = localStorage.getItem("data");
}
showTask();