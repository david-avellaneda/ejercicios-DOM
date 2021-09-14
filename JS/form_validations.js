export default function validations() {
    const $form = document.querySelector('.contact-form'),
        $inputs = document.querySelectorAll('.contact-form [required]');
    $inputs.forEach(input => {
        const $span = document.createElement('span');
        $span.id = input.name; // A la variable $span agregale un id que es igual a lo que viene en input en su atributo name
        $span.textContent = input.title; // Agregale lo que viene el e atributo title
        $span.classList.add('contact-form-error', 'none');
        input.insertAdjacentElement('afterend', $span);
    });
    document.addEventListener('keyup', e => {
        if(e.target.matches('.contact-form [required]')){
            let input = e.target, 
                pattern = input.pattern || input.dataset.pattern;
            if (pattern && input.value !== ''){
                let regExp = new RegExp(pattern); // Agregale a la expresión regular lo que viene en la variable pattern
                return !regExp.exec(input.value)
                    ? document.getElementById(input.name).classList.add('is-active')
                    : document.getElementById(input.name).classList.remove('is-active');
            };
            if (!pattern){
                return input.value === ''
                    ? document.getElementById(input.name).classList.add('is-active')
                    : document.getElementById(input.name).classList.remove('is-active');
            };
        };
    });
};