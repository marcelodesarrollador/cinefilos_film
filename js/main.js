const fila = document.querySelector('.contenedor-carousel');

const peliculas = document.querySelector('.peliculas');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

// ? ----- ----- | EVENT LISTENER PARA LA FLECHA DERECHA | ----- -----
flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft = +fila.offsetwidth
});

// ? ----- ----- | EVENT LISTENER PARA LA FLECHA IZQUIERDA | ----- -----
flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft = -fila.offsetwidth
});