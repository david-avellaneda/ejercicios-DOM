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
const $section2_stage = document.getElementById("section2-stage");
$section2_stage.addEventListener("click", () => {
    d.addEventListener("keydown", (e) => moveBall(e, ".section2-stage", ".section2-ball"));
});
d.addEventListener("scroll", () => scrollTop());
const $scrollToTop = document.getElementById("scrollToTop")
$scrollToTop.addEventListener("click", () => goToStart("scrollToTop"));