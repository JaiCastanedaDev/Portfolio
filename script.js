let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}
function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
const section = document.getElementById('about-me');

// Obtener la posición superior de la sección
const sectionTop = section.offsetTop;

// Función para verificar si la sección está visible en la ventana
function checkSectionVisibility() {
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY || window.pageYOffset;

    // Calcular la posición inferior de la sección
    const sectionBottom = sectionTop + section.offsetHeight;

    // Verificar si la sección está visible en la ventana
    if (scrollY + windowHeight > sectionTop && scrollY < sectionBottom) {
        // Agregar la clase para activar la animación
        section.classList.add('animate-section');
    } else {
        // Remover la clase de la animación
        section.classList.remove('animate-section');
    }
}

// Agregar el evento de scroll para verificar la visibilidad de la sección
window.addEventListener('scroll', checkSectionVisibility);

// Verificar la visibilidad de la sección al cargar la página
checkSectionVisibility();