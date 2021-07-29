export default function menuHamburguesa () {
    const btnMenu = document.getElementById("btnMenu"),
        menu = document.getElementById("menu"),
        menuLink = document.querySelectorAll(".menu-link");
    btnMenu.addEventListener("click", () => {
        menu.classList.toggle("mostrar");
        menuLink[0].addEventListener("click", () => {
            menu.classList.remove("mostrar");
        });
        menuLink[1].addEventListener("click", () => {
            menu.classList.remove("mostrar");
        });
        menuLink[2].addEventListener("click", () => {
            menu.classList.remove("mostrar");
        });
        menuLink[3].addEventListener("click", () => {
            menu.classList.remove("mostrar");
        });
        menuLink[4].addEventListener("click", () => {
            menu.classList.remove("mostrar");
        });
    });
};  