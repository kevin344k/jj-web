// Obtener elementos del DOM
const menuToggle = document.getElementById("menuToggle");
const sideMenu = document.getElementById("sideMenu");
const closeMenu = document.getElementById("closeMenu");
const overlay = document.getElementById("overlay");

// Función para abrir el menú
menuToggle.addEventListener("click", () => {
    console.log('click abrir menu');
    
  sideMenu.classList.add("active");
  overlay.classList.add("active");
});

// Función para cerrar el menú
closeMenu.addEventListener("click", () => {
  sideMenu.classList.remove("active");
  overlay.classList.remove("active");
});
// Detectar clics fuera del menú
document.addEventListener("click", (event) => {
  const isClickInsideMenu = sideMenu.contains(event.target);
  const isClickOnToggle = menuToggle.contains(event.target);

  // Si el clic no está dentro del menú ni en el botón de apertura, cerrar el menú
  if (!isClickInsideMenu && !isClickOnToggle) {
    sideMenu.classList.remove("active");
    overlay.classList.remove("active");
  }
});


    // Agregar evento a los enlaces del menú para cerrarlo al hacer clic
    const menuLinks = document.querySelectorAll('.sidebar ul li a');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        sideMenu.classList.remove("active");
        overlay.classList.remove("active");
      })})