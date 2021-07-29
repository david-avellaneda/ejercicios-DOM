import menuHamburguesa from "./menu_hamburguesa.js";
import { digitalClock } from "./digital_clock.js";
import musicBotton from "./sound_botton.js";
import moveBall from "./keyboard_events.js";
import countdown from "./countdown.js";
import scrollTop from "./scroll_top.js";
import { darkMode } from "./dark_mode.js";
const d = document;
d.addEventListener("DOMContentLoaded", () => {
    menuHamburguesa();
    digitalClock("#realTimeClock", "#activateWatch", "#deactivateWatch");
    musicBotton("#activateMusic", "#deactivateMusic");
    countdown("Dec 24 2021 24:00:00");
    scrollTop(".scrollTop");
    darkMode("changeBackground");
});
const $section2_stage = document.getElementById("section2-stage");
$section2_stage.addEventListener("click", () => {
    d.addEventListener("keydown", (e) => moveBall(e, ".section2-stage", ".section2-ball"));
});
