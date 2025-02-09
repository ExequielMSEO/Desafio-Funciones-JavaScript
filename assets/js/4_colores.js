const div1 = document.getElementById('div1');

// Función para cambiar el color del fondo
function pintar(colordiv, color) {
    colordiv.style.backgroundColor = color;
}
// Evento para cambiar a negro al hacer clic
div1.addEventListener("click", () => pintar(div1, 'black'));
div2.addEventListener("click", () => pintar(div2, 'black'));
div3.addEventListener("click", () => pintar(div3, 'black'));
div4.addEventListener("click", () => pintar(div4, 'black'));
