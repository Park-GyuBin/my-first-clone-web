const loginForm = document.querySelector("#login-form");
const loginText = document.querySelector(".login-form-input");
const greeting = document.querySelector("#greeting");


const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    const usernameValue = loginText.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY,usernameValue);
    paintGreetings(usernameValue);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    

}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
}




const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
    } else {
        greeting.classList.remove(HIDDEN_CLASSNAME);
        paintGreetings(savedUserName);
    }