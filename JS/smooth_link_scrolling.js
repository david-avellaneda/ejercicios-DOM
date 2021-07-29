// window.onload = () => { // En este caso onload significa que el evento se activará únicamente cuando la ventana del navegador haya cargado (o leído) todas las líneas del documento .
//     const links = document.querySelectorAll(".menu-link");
//     const firstLink = links[0];
//     firstLink.addEventListener("click", () => {
//         smoothScroll("#reloj-digital-y-alarma", "3000");
//     });
//     const secondLink = links[1];
//     secondLink.addEventListener("click", () => {
//         smoothScroll("#eventos-del-teclado", "3000");
//     });
//     const thirdLink = links[2];
//     thirdLink.addEventListener("click", () => {
//         smoothScroll("#cuenta-regresiva", "3000");
//     });
//     const fourthLink = links[3];
//     fourthLink.addEventListener("click", () => {
//         smoothScroll("#section4", "3000");
//     });
//     const fifthLink = links[4];
//     fifthLink.addEventListener("click", () => {
//         smoothScroll("#section5", "3000");
//     });
// }
export default function smoothScroll(objective, duration) {
    let elementObjective = document.querySelector(objective),
        elementPosition = elementObjective.getBoundingClientRect().top, // devuelve el tamaño de un elemento y su posición relativa respecto a la ventana de visualización es este cuánto está separado del top
        initialPosition = window.pageYOffset, // devuelve el número de píxeles que el documento se desplaza actualmente a lo largo del eje vertical
        initialTime = null;
    const animation = timeNow => {
        if(initialTime === null) initialTime = timeNow;
        let timeElapsed = timeNow - initialTime,
            auxiliaryAnimation = equationForAnimation(timeElapsed, initialPosition, elementPosition, duration);
        window.scrollTo(0, auxiliaryAnimation); // 0 en Y y en X auxiliaryAnimation
        if(timeElapsed < duration) requestAnimationFrame(animation);
    };
    requestAnimationFrame(animation);
    const equationForAnimation = (t, b, c, d) => {
        t /= d/2;
        if (t < 1) return c/2*t*t*t*t*t + b;
        t -= 2;
        return c/2*(t*t*t*t*t + 2) + b;
    };
};