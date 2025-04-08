const inputEl = document.querySelector(".input");
const bodyEl = document.querySelector("body");

inputEl.checked = JSON.parse(localStorage.getItem("mode"));

updateBody();

function updateBody(){
    if(inputEl.checked){
        bodyEl.style.backgroundColor = "black";
    } else {
        bodyEl.style.backgroundColor = "white";
    }
}

inputEl.addEventListener("click", (event)=> {
    updateLocalStorage();
    if (inputEl.checked == true) {
        updateBody();
    } else {
        updateBody();
    }
})

function updateLocalStorage(){
    localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}