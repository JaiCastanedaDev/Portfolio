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