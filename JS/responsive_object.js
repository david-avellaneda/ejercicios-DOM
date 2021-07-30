export default function reponsiveMedia(id, mediaQuery, mobileContent, desktopContent) {
    let breakpoint = window.matchMedia(mediaQuery);
    // Las @media queries es la forma más simple que nos brinda CSS para mostrar distintos estilos en una web dependiendo de factores físicos, como es la dimensión de la pantalla o la densidad de píxel por pulgada. matchMedia() Esta simple API nos proporciona todo lo necesario para llevar a cabo este mismo efecto con JavaScript y poder controlar aspectos tan esenciales como si un Smartphone está en posición vertical u horizontal.
    const responsive = (element) => {
        if(element.matches){
            // El método matches() comprueba si el Element sería seleccionable por el selector CSS especificado en la cadena; en caso contrario, retorna false.
            document.getElementById(id).innerHTML = desktopContent;
        } else {
            document.getElementById(id).innerHTML = mobileContent;
        }
    };
    breakpoint.addEventListener("change",responsive);
    responsive(breakpoint);
};