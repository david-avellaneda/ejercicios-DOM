// https://developer.mozilla.org/es/docs/Web/API/Intersection_Observer_API
export default function scrollspy() {
    // Trae a todas las clases que contengan el data attribute llamado data-scroll-spy
    const $sections = document.querySelectorAll('.main-section');
    // console.log($sections);
    // Una función de callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.
    const callback = (entries) => {
        // Muestra cada IntersectionObserverEntry que encuentra gracias a el forEach de $sections
        // console.log("Entries: ", entries);
        entries.forEach(entry => {
            // console.log(entry); // Imprime cada entrada indivualmente
            const id = entry.target.getAttribute('id'); // Accede al target y tome el atributo id, ver console.log("Entries", entries)
            // console.log(id);
            if (entry.isIntersecting) { // https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/isIntersecting
                document.querySelector(`.menu-link[href*='#${id}']`).classList.add('active');
            } else document.querySelector(`.menu-link[href*='#${id}']`).classList.remove('active');
        });
    };
    const detectPosition = new IntersectionObserver(callback, {
        threshold: [0.5, 1] // tiene un valor de 1 a 0, cuando el elemento tenga el 50% o más de su contenido ya es visible y marca en el menú
        // Si te pone [0.5, 0.7] ES MÍNIMO QUE TENGA EL 50% HASTA EL 70%
    });
    // Por cada sección me ejecute la función detectPosition con un método llamado .observe() que detecta los cambios en la intersección de visibilidad con respecto a la ventana gráfica y como parámetro recibe la sectión "$sections", es decir el elemento "el"
    $sections.forEach(el => detectPosition.observe(el));
};