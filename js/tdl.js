const toDoListForm = document.querySelector(".to-do-list-form");
const toDoListText = document.querySelector(".to-do-list-text");
const toDoList = document.querySelector(".to-do-list");

const listArray =[];

function addList (event) { 
    event.preventDefault();
    const li = document.createElement("li");
    toDoList.appendChild(li);
    const textbox = toDoListText.value;
    li.innerText = textbox;
    listArray[listArray.length] = textbox;
    console.log(li.innerText);
    toDoListText.value = null;

}

toDoListForm.addEventListener("submit",addList);
