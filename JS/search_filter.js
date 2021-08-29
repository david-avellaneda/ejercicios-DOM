export default function searchFilter(input, selector) {
    document.addEventListener('keyup', (e) => {
        if(e.target.matches(input)) { // Si es el input en el que se está escribiendo
            // console.log(e.keyCode);
            // console.log(e.target.value); // Imprime las letras que estén en el input
            if(e.key === "Escape") e.target.value = "";
            document.querySelectorAll(selector).forEach(el => {
                el.textContent.toLowerCase().includes(e.target.value)
                    ? el.classList.remove("filter")
                    : el.classList.add("filter");
                // Contenido textual del selector y que se conviertan en minúsculas
                // includes nos dice si el texto existe el textContent de los elementos y si el valor coincide sería el e.target.value, includes es un boleano "true" "false"
            });
        };
    });
};