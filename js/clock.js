const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date();
    const hours=String(date.getHours()).padStart(2,"0");
    const minures= String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minures}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);