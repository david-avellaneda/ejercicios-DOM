export default function menuHamburguesa () {
    const btnMenu = document.getElementById("btnMenu"),
    menu = document.getElementById("menu");
    btnMenu.addEventListener("click", () => {
        menu.classList.toggle("mostrar");
        menu.addEventListener("click", () => {
            menu.classList.remove("mostrar");
        });
    });
};  