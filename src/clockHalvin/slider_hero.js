const thumbnails=document.querySelectorAll('.thumbnails');
const header = document.querySelector('#header');
console.log(thumbnails);

const backgrounds = [
  "url('../../imagenes/hero/hero_desktop_1.jpeg')",
  "url('../../imagenes/hero/hero_desktop_2.jpeg')",
  "url('../../imagenes/hero/hero_desktop_3.jpeg')",
  "url('../../imagenes/hero/hero_desktop_4.jpeg')"
];

let current = 0;

function cycleClass() {
  // Quitar la clase de todos
  thumbnails.forEach(el => el.classList.remove('img-preview-thumbnails'));
  header.style.backgroundImage = backgrounds[current];
  // Agregar la clase solo al actual
  thumbnails[current].classList.add('img-preview-thumbnails');

  // Pasar al siguiente (con ciclo)
  current = (current + 1) % thumbnails.length;
}

// Ejecutar cada 6 segundos
cycleClass(); // ejecutar al principio
setInterval(cycleClass, 6000);