let botonStart = document.querySelector(".start");
let botonPause = document.querySelector(".pause");
let botonReset = document.querySelector(".reset");
let circulo = document.querySelector(".circulo");

let hora = (min = seg = "0" + 0),
  startTiempo;

botonStart.addEventListener("click", start);
botonPause.addEventListener("click", pause);
botonReset.addEventListener("click", reset);

function start() {
  botonStart.classList.add("active");
  circulo.classList.add("circulo-activo");
  circulo.classList.remove("circulo-reinicia");
  botonStart.classList.remove("stopActive");
  botonPause.classList.remove("stopActive");

  startTiempo = setInterval(() => {
    seg++;
    seg = seg < 10 ? "0" + seg : seg;

    if (seg === 60) {
      min++;
      min = min < 10 ? "0" + min : min;
      seg = "0" + 0;
    }
    if (min === 60) {
      hora++;
      hora = hora < 10 ? "0" + hora : hora;
      min = "0" + 0;
    }
    cronometro();
  }, 1000);
}

function pause() {
  botonStart.classList.remove("active");
  botonPause.classList.add("stopActive");
  circulo.classList.remove("circulo-activo");
  clearInterval(startTiempo);
}

function reset() {
  botonStart.classList.remove("active");
  botonPause.classList.remove("stopActive");
  circulo.classList.add("circulo-reinicia");

  clearInterval(startTiempo);
  (hora = min = seg = "0" + 0), cronometro();
}

function cronometro() {
  document.querySelector(".seg").innerText = seg;
  document.querySelector(".min").innerText = min;
  document.querySelector(".hora").innerText = hora;
}
