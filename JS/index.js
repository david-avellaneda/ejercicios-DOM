import menuHamburguesa from "./menu_hamburguesa.js";
import { digitalClock } from "./digital_clock.js";
import musicBotton from "./sound_botton.js";
import moveBall from "./keyboard_events.js";
import countdown from "./countdown.js";
import scrollTop from "./scroll_top.js";
import { darkMode } from "./dark_mode.js";
import smoothScroll from "./smooth_link_scrolling.js"
const d = document;
d.addEventListener("DOMContentLoaded", () => {
    menuHamburguesa();
    digitalClock("#realTimeClock", "#activateWatch", "#deactivateWatch");
    musicBotton("#activateMusic", "#deactivateMusic");
    countdown("Dec 24 2021 24:00:00");
    scrollTop(".scrollTop");
    darkMode("changeBackground");

    const links = document.querySelectorAll(".menu-link");
    const firstLink = links[0];
    firstLink.addEventListener("click", () => {
        smoothScroll("#reloj-digital-y-alarma", "3000");
    });
    const secondLink = links[1];
    secondLink.addEventListener("click", () => {
        smoothScroll("#eventos-del-teclado", "3000");
    });
    const thirdLink = links[2];
    thirdLink.addEventListener("click", () => {
        smoothScroll("#cuenta-regresiva", "3000");
    });
    const fourthLink = links[3];
    fourthLink.addEventListener("click", () => {
        smoothScroll("#section4", "3000");
    });
    const fifthLink = links[4];
    fifthLink.addEventListener("click", () => {
        smoothScroll("#section5", "3000");
    });
});
const $section2_stage = document.getElementById("section2-stage");
$section2_stage.addEventListener("click", () => {
    d.addEventListener("keydown", (e) => moveBall(e, ".section2-stage", ".section2-ball"));
});
