const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You have not typed anything yet");
    }
    else{
        let li = document.createElement("li");
        let span = document.createElement("span");

        // create li in html
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        //add new span
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentEleent.remove();
    }
}, false);