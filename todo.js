const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const button = document.getElementById("button");
const remove = document.getElementById("delete");

function addTask() {
    if(inputBox.value === ''){
        alert('You must write something ');
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value ="";
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData() {
    localStorage.setItem("data",listContainer.innerHTML );
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

// inputBox.addEventListener('keypress', function(evt) {
//     if (evt.key === 'Enter') {
//         addTask();
//     }
// });
// button.addEventListener("click",function(e) {
//     addTask();
// })
inputBox.addEventListener('keydown', function(evt) {
    if (evt.key === 'Enter') {
        evt.preventDefault();
        button.classList.add('enter-pressed');
        addTask();
        setTimeout(function() {
            button.classList.remove('enter-pressed');
        }, 100);
    }
});

button.addEventListener("click",function(e) {
    button.classList.add('button-clicked');
    addTask();
    setTimeout(function() {
        button.classList.remove('button-clicked');
    }, 100);
});

remove.addEventListener("click", function(element) {
    const checked = listContainer.querySelectorAll("li.checked");
    checked.forEach(function(element) {
        element.remove();
    });
    saveData();
})


