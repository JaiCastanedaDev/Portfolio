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
document.addEventListener("DOMContentLoaded", function() {
    var text = "Soy un apasionado desarrollador de software, constantemente inmerso en el mundo de la tecnología. Siempre estoy buscando oportunidades para" +
        " aprender y crecer en mi campo, explorando nuevas tecnologías y enfoques. Mi pasión por el desarrollo de software me impulsa a mantenerme actualizado" +
        " y adquirir nuevas habilidades, con el objetivo de crear soluciones innovadoras y eficientes.";
    var typedText = document.getElementById("typed-description");
    var index = 0;

    function type() {
        if (index < text.length) {
            typedText.textContent += text.charAt(index);
            index++;
            setTimeout(type, 10);
        }
    }

    var aboutMeSection = document.getElementById("about-me");
    var options = {
        rootMargin: "0px",
        threshold: 0.5
    };

    var observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                type();
                observer.unobserve(entry.target);
            }
        });
    }, options);

    observer.observe(aboutMeSection);
});
function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("php");
        habilidades[3].classList.add("mysql");
        habilidades[4].classList.add("git");
        habilidades[5].classList.add("laravel");
        habilidades[6].classList.add("vue");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 