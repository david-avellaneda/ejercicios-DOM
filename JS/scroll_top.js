export default function scrollTop(btn) {
        const $button_scrollTop = document.querySelector(btn);
        window.addEventListener("scroll", () => {
            if (window.scrollY > 600) {
                $button_scrollTop.classList.add("active");
                //$buttom_scrollTop.classList.toggle("active");
            } else {
                $button_scrollTop.classList.remove("active");
            };
        });
        $button_scrollTop.addEventListener("click", () => 
            scrollTo({ // window.scrollTo también se puede escribir así
                top: 0,
                behavior: "smooth"
                // El ID es el botón que aparece cuando se hace scroll, entonces "scrollTo" lo lleva al inicio por eso top: 0
                // window.scrollTo Desplaza el visor a un conjunto específico de coordenadas en el documento, es este caso hacia top en 0
            })
        );
};