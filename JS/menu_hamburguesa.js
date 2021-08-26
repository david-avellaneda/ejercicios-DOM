export default function menuHamburguesa () {
    const btnMenu = document.getElementById("btnMenu"),
        menu = document.getElementById("menu"),
        menuLink = document.querySelectorAll(".menu-link");
    btnMenu.addEventListener("click", () => {
        menu.classList.toggle("mostrar");
        menuLink.forEach(e => e.addEventListener("click", () =>{
            menu.classList.remove("mostrar")
        }));
        // ESTA ES LO MISMO QUE EL forEach pero con forEach es no escrbimos más
        // menuLink[0].addEventListener("click", () => {
        //     menu.classList.remove("mostrar");
        // });
        // menuLink[1].addEventListener("click", () => {
        //     menu.classList.remove("mostrar");
        // });
    });
};  