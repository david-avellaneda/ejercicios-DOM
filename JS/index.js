import menuHamburguesa from "./menu_hamburguesa.js";
import { digitalClock } from "./digital_clock.js";
import musicBotton from "./sound_botton.js";
import moveBall from "./keyboard_events.js";
import countdown from "./countdown.js";
import {scrollTop, goToStart} from "./scroll_top.js";
const d = document;
d.addEventListener("DOMContentLoaded", () => {
    menuHamburguesa();
    digitalClock("#realTimeClock", "#activateWatch", "#deactivateWatch");
    musicBotton("#activateMusic", "#deactivateMusic");
    countdown("Dec 24 2021 24:00:00");
});
d.addEventListener("keydown", (e) => moveBall(e, ".section2-stage", ".section2-ball"));
d.addEventListener("scroll", () => scrollTop());
d.addEventListener("click", () => goToStart("scrollToTop"));