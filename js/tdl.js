const toDoListForm = document.querySelector(".to-do-list-form");
const toDoListText = document.querySelector(".to-do-list-text");
const toDoList = document.querySelector(".to-do-list");

const listArray =[];

function addList (event) { 
    event.preventDefault();
    const li = document.createElement("li");
    toDoList.appendChild(li);
    const textbox = toDoListText.value;
    toDoList.firstChild.innerText = textbox;
    listArray.push =  toDoList.firstChild.innerText;
    console.log(toDoList.firstChild.innerText);
    console.log(listArray[0]);
}

toDoListForm.addEventListener("submit",addList);
