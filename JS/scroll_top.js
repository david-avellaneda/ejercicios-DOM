const $button_scrollTop = document.querySelector(".scrollTop");
export function scrollTop() {
    if(window.scrollY > 600) {
        $button_scrollTop.classList.toggle("active", window.scrollY > 600);
        //$buttom_scrollTop.classList.add("active");
    }
    if(window.scrollY < 600){
        $button_scrollTop.classList.remove("active");
    }
}
export function goToStart(id) {
    document.getElementById(id);
    scrollTo({ // window.scrollTo también se puede escribir así
        top: 0
        // El ID es el botón que aparece cuando se hace scroll, entonces "scrollTo" lo lleva al inicio por eso top: 0
        // window.scrollTo Desplaza el visor a un conjunto específico de coordenadas en el documento, es este caso hacia top en 0
    });
};