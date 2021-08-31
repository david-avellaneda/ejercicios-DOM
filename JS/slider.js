export default function slider(){
    const $slider = document.getElementById('slider'),
        $leftBtn = document.getElementById('arrowLeft-btn'),
        $rightBtn = document.getElementById('arrowRight-btn');
    let $sliderSection = document.querySelectorAll(".slider-section"),
        $sliderSectionLast = $sliderSection[$sliderSection.length -1]; // De esta manera se obtiene al último section
    $slider.insertAdjacentElement('afterbegin', $sliderSectionLast); // Lo coloca después de empezar, es decir de primeras
    function moveRight(){
        let $sliderSectionFirst = document.querySelectorAll(".slider-section")[0]; // Toma al primero
        $slider.style.marginInlineStart = "-200%";
        $slider.style.transition = "all 1.6s ease"
        setTimeout(() => {
            $slider.style.transition = "none";
            $slider.insertAdjacentElement('beforeend', $sliderSectionFirst); // Beforeend es "ANTES DE TERMINAR", es decir antes de que finalice la divi donde esta $slider
            $slider.style.marginInlineStart = "-100%";
        }, 1500);
    }
    $leftBtn.addEventListener('click', () => {
        let $sliderSection = document.querySelectorAll(".slider-section"),
            $sliderSectionFirst = $sliderSection[$sliderSection.length -1];
        $slider.style.marginInlineStart = "0";
        $slider.style.transition = "all 1.6s ease"
        setTimeout(() => {
            $slider.style.transition = "none";
            $slider.insertAdjacentElement('afterbegin', $sliderSectionFirst); // Beforeend es "DESPUÉS DE EMPEZAR", es decir antes de que la primera imagen en la div = $slider
            $slider.style.marginInlineStart = "-100%";
        }, 1500);
        clearInterval(currentTime); // Cuando le de click al botón de la izquierda detenemos el setInterval
        currentTime = setInterval(() => moveRight(), 10000); // Volvemos a iniciarlo
    });
    $rightBtn.addEventListener('click', () => {
        moveRight();
        clearInterval(currentTime); // Cuando le de click detenemos el setInterval
        currentTime = setInterval(() => moveRight(), 10000); // Aquí cuando le de click y sea una nueva imagen que vuelva a reiniciar el setInterval, por eso lo detenemos y lo volvemos a iniciar para que inicie desde 0 segundos
    });
    let currentTime =
        setInterval(() => {
            moveRight();
        }, 10000);
};