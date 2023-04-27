const body = document.querySelector("body");
const span = document.querySelector("span");


// Esto lo hara automaticamente cada 2 segundos
window.setInterval(function () {
    let valorNuevo = "#";
    const valoresPosibles = "0123456789ABCDEF";
    for (let i = 0; i < 6; i++) {
        valorNuevo += valoresPosibles[Math.floor(Math.random() * 16)];
    }
    body.style.backgroundColor = valorNuevo;
    span.innerText = valorNuevo;
    console.log(valorNuevo);
}, 2000);