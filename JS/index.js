import menuHamburguesa from "./menu_hamburguesa.js";
import { digitalClock } from "./digital_clock.js";
import musicBotton from "./sound_botton.js";
import moveBall from "./keyboard_events.js";
import countdown from "./countdown.js";
const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
    menuHamburguesa();
    digitalClock("#realTimeClock", "#activateWatch", "#deactivateWatch");
    musicBotton("#activateMusic", "#deactivateMusic");
    countdown("Jul 26 2021 21:55:00");
});
d.addEventListener("keydown", (e) => {
    moveBall(e, ".section2-stage", ".section2-ball");
});