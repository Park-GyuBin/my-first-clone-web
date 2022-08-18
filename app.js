const loginForm = document.querySelector(".login-form");
const loginText = loginForm.querySelector("input");


function onLoginSubmit(event) {
    event.preventDefault();
    const usernameValue = loginText.value;
    console.log(usernameValue);
}

loginForm.addEventListener("submit",onLoginSubmit)