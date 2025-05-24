const thumbnails=document.querySelectorAll('.thumbnails');
const slides = document.querySelectorAll('.hero-slider .slide');





let current = 0;

function cycleClass() {
  // Quitar la clase de todos
  thumbnails.forEach(el => el.classList.remove('img-preview-thumbnails'));

  // Agregar la clase solo al actual
  thumbnails[current].classList.add('img-preview-thumbnails');

  // Pasar al siguiente (con ciclo)
  current = (current + 1) % thumbnails.length;
}



const mediaQuery = window.matchMedia('(min-width: 760px)');

if (mediaQuery.matches) {
  // Esto se ejecuta si la pantalla tiene 768px o más
// Ejecutar cada 6 segundos
cycleClass(); // ejecutar al principio
setInterval(cycleClass, 6000);
} 

let current2 = 0;
function showNextSlide() {
  slides[current2].classList.remove('active');
  current2 = (current2 + 1) % slides.length;
  slides[current2].classList.add('active');
}

// Cambia cada 5 segundos

setInterval(showNextSlide, 6000);