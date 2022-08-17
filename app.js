const loginForm = document.querySelector(".login-form");
const loginText = loginForm.querySelector("input");
const loginBtn = loginForm.querySelector("button");

function clickBtn() {
    console.log(loginText.value);
}

loginBtn.addEventListener("click",clickBtn)