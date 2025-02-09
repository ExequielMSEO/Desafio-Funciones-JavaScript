let colorSeleccionado;

const divKey = document.getElementById('key');

function cambiarColor(elemento, color) {
    elemento.style.backgroundColor = color;
}

function cambiarColor(elemento, color) {
    elemento.style.backgroundColor = color;
}

document.addEventListener('keydown', function(event) {
    const key = event.key.toLowerCase(); // Convertimos la tecla a minúscula
    
    if (key === 'a') {
        colorSeleccionado = 'pink';
    } else if (key === 's') {
        colorSeleccionado = 'orange';
    } else if (key === 'd') {
        colorSeleccionado = 'cyan';
    }
    
    cambiarColor(divKey, colorSeleccionado);
});


//La letra a guardará el color rosado.
// La letra s guardará el color naranjo.
// La letra d guardará el color celeste.
