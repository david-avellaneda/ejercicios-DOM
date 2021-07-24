import menuHamburguesa from "./menu_hamburguesa.js";
import { digitalClock } from "./digital_clock.js";
const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
    menuHamburguesa();
    digitalClock("#realTimeClock", "#activateWatch", "#deactivateWatch");
});