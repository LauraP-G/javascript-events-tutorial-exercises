



/* Solución desde HTML añadiendo en el input un onclick llamando a esta función

window.helloWorldClick = function helloWorldClick() {
    alert ("Hello World");
}*/


let buttomHello = document.querySelector("#hello")

buttomHello.addEventListener("click", function(){
    alert ("Second Hello World");
})