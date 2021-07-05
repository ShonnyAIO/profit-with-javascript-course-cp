const body = document.querySelector("body");
const span = document.querySelector("span");
const btn = document.querySelector("button");


/* Esto hace cuando le damos click al boton
btn.addEventListener("click", () => {
    let valorNuevo = "#";
    const valoresPosibles = "0123456789ABCDEF";
    for(let i = 0; i < 6; i++){
        valorNuevo += valoresPosibles[Math.floor(Math.random()*16)];
    }
    body.style.backgroundColor = valorNuevo;
    span.innerText = valorNuevo;
}); */


// Esto lo hara automaticamente cada 2 segundos
window.setInterval(function() {
    let valorNuevo = "#";
    const valoresPosibles = "0123456789ABCDEF";
    for(let i = 0; i < 6; i++){
        valorNuevo += valoresPosibles[Math.floor(Math.random()*16)];
    }
    body.style.backgroundColor = valorNuevo;
    span.innerText = valorNuevo;
}, 2000);