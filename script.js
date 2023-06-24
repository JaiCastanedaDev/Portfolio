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
const section = document.getElementById('description');

const sectionTop = section.offsetTop;

function checkSectionVisibility() {
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY || window.pageYOffset;

    const sectionBottom = sectionTop + section.offsetHeight;

    if (scrollY + windowHeight > sectionTop && scrollY < sectionBottom) {
        section.classList.add('description');
    }
}

window.addEventListener('scroll', checkSectionVisibility);

checkSectionVisibility();