export default function smoothScroll(id, duration) {
    let elementObjective = document.getElementById(id),
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