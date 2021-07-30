export function darkMode(btn) {
    document.addEventListener("DOMContentLoaded", () => {
        const bntDarkMode = document.getElementById(btn);
        bntDarkMode.addEventListener('click', () => {
            bntDarkMode.classList.toggle("active");
            document.body.classList.toggle("dark");
            if(document.body.classList.contains("dark")){ // El método de contains nos permite comprobar la lista de clases del body en este caso
                localStorage.setItem("theme-color", 'darkMode'); // Con setItem agregamos un elemento, el primer parámetro es el nombre de ese espacio de almacenamineto dentro de localStorage, el segundo valor es si lo tiene o no
            } else localStorage.setItem("theme-color", "lightMode");
        });
        if(localStorage.getItem("theme-color") === "darkMode"){ // getItem accedemos a un elemento, en este caso a dark--mode y si es igual a true que ejecute las siguientes líneas
            document.body.classList.add("dark");
            bntDarkMode.classList.add("active");
        } else { // Si no es igual a true entonces ejecuta estas líneas
            document.body.classList.remove("dark");
            bntDarkMode.classList.remove("active");
        }
    });
};