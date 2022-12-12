let botonStart = document.querySelector('.start');
let botonPause = document.querySelector('.pause');
let botonReset = document.querySelector('.reset');

botonStart.addEventListener('click', start);
botonPause.addEventListener('click', pause);
botonReset.addEventListener('click', reset);


function start() {
    botonStart.classList.add('active');
    botonStart.classList.remove('stopActive');
    botonPause.classList.remove('stopActive');
}

function pause() {
    botonStart.classList.remove('active');
    botonPause.classList.add('stopActive');
}

function reset() {
    botonStart.classList.remove('active');
    botonPause.classList.remove('stopActive');
}