export default function slider(){
    const $slider = document.getElementById('slider'),
        $leftBtn = document.getElementById('arrowLeft-btn'),
        $rightBtn = document.getElementById('arrowRight-btn');
    let $sliderSection = document.querySelectorAll(".slider-section"),
        $sliderSectionLast = $sliderSection[$sliderSection.length -1]; // De esta manera se obtiene al último section
    $slider.insertAdjacentElement('afterbegin', $sliderSectionLast); // Lo coloca después de empezar, es decir de primeras
    $rightBtn.addEventListener('click', () => {
        let $sliderSectionFirst = document.querySelectorAll(".slider-section")[0]; // Toma al primero
        $slider.style.marginInlineStart = "-200%";
        $slider.style.transition = "all 1s ease"
        setTimeout(() => {
            $slider.style.transition = "none";
            $slider.insertAdjacentElement('beforeend', $sliderSectionFirst); // Beforeend es "ANTES DE TERMINAR", es decir antes de que finalice la divi donde esta $slider
            $slider.style.marginInlineStart = "-100%";
        }, 900);
    });
    $leftBtn.addEventListener('click', () => {
        let $sliderSectionFirst = document.querySelectorAll(".slider-section")[2]; // Toma el último
        $slider.style.marginInlineStart = "0%";
        $slider.style.transition = "all 1s ease"
        setTimeout(() => {
            $slider.style.transition = "none";
            $slider.insertAdjacentElement('afterbegin', $sliderSectionFirst); // Beforeend es "DESPUÉS DE EMPEZAR", es decir antes de que la primera imagen en la div = $slider
            $slider.style.marginInlineStart = "-100%";
        }, 900);
    });
};

