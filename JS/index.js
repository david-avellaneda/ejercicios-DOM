import menuHamburguesa from "./menu_hamburguesa.js";
import { digitalClock } from "./digital_clock.js";
import musicBotton from "./sound_botton.js";
import moveBall from "./keyboard_events.js";
import countdown from "./countdown.js";
import scrollTop from "./scroll_button.js";
import { darkMode } from "./dark_mode.js";
import smoothScroll from "./smooth_link_scrolling.js";
import responsive_object from "./responsive_object.js";
import userAgent from "./device_detection.js";
import networkStatus from "./network_status.js";
import { renderCar } from "./skeleton_load.js";
import webcam from "./webcam.js";
const d = document;
d.addEventListener("DOMContentLoaded", () => {
    menuHamburguesa();
    digitalClock("realTimeClock", "activateWatch", "deactivateWatch");
    musicBotton("activateMusic", "deactivateMusic");
    countdown("Dec 24 2021 24:00:00");
    scrollTop(".scrollTop");
    const links = document.querySelectorAll(".menu-link");
    const firstLink = links[0];
    firstLink.addEventListener("click", () => smoothScroll("#reloj-digital-y-alarma", "3000"));
    const secondLink = links[1];
    secondLink.addEventListener("click", () => moothScroll("#eventos-del-teclado", "3000"));
    const thirdLink = links[2];
    thirdLink.addEventListener("click", () => smoothScroll("#cuenta-regresiva", "3000"));
    const fourthLink = links[3];
    fourthLink.addEventListener("click", () => moothScroll("#responsive-con-JavaScript", "3000"));
    const fifthLink = links[4];
    fifthLink.addEventListener("click", () => smoothScroll("#detección-de-plataforma", "3000"));
    const sixthLink = links[5];
    sixthLink.addEventListener("click", () => smoothScroll("#detección-de-cámara", "3000"));
    responsive_object(
        "youtube", // ID youtube
        "(min-width:850px)", 
        `<h4 class="youtube-title-mobile">Da click en la imagen para ver el video</h4>
        <a href="https://youtu.be/P982oehprfY" target="_blank" rel="noreferrer noopener" style="grid-column:1/3; grid-row:2;">
            <img src="https://i.ytimg.com/vi_webp/P982oehprfY/maxresdefault.webp" style="width:100%;" />
        </a>`, // mobileContent, utilizamos las template strings
        `<h4 class="youtube-title-desktop">Da click para ver el video</h4>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/P982oehprfY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width:100%; grid-column:1/3;"></iframe>` // desktopContent, utilizamos las template strings
    ); 
    responsive_object(
        "maps", // ID maps
        "(min-width:850px)", 
        `<h4 class="maps-title-mobile">Da click en la imagen para ver la ubicación</h4>
        <a href="https://goo.gl/maps/oBccT9j6u9uhhakA9" target="_blank" rel="noreferrer noopener" style="grid-column:1/3; grid-row:2; display:flex; justify-content:center;">
            <img src="./assets/Icons/mapa.png" style="width:70%;" />
        </a>`, // mobileContent, utilizamos las template strings
        `<h4 class="maps-title-desktop">Da click para ver el maps</h4>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.263701817781!2d-74.0782321852529!3d4.598120596659561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99a7eccfe58f%3A0x99cb72b35351476!2sPlaza%20de%20Bol%C3%ADvar%20de%20Bogot%C3%A1!5e1!3m2!1ses!2sco!4v1627661077028!5m2!1ses!2sco" width="600" height="450" style="border:0; width:100%; height: 315px; grid-column:1/3;" allowfullscreen="" loading="lazy"></iframe>` // desktopContent, utilizamos las template strings
    );
    userAgent("operating-system-name");
    setTimeout(() => {
        renderCar();
    }, 3000);
    webcam("section6-buttons", "(min-width:900px)");
});
const $section2_stage = document.getElementById("section2-stage");
$section2_stage.addEventListener("click", () => {
    d.addEventListener("keydown", (e) => moveBall(e, ".section2-stage", ".section2-ball"));
});
darkMode("changeBackground"); // La sacamos del el evento DOMContentLoaded ya que no deja que hayan dos eventos iguales el mismo evento y necesitamos que cuando cargue el contenido rebice el localStorage por eso en js de darkMode se declaro el evento DOMContentLoaded y esta declaración la sacamos de este evento ya que no deja el mismo evento, ver js de dark mode
networkStatus(); // Lo declaramos afuera porque si lo declaramos en DOMContentLoaded no sirve ya que tiene que estar detectando en cada momento más no cuando el documento esté cargado
document.addEventListener("keydown", (e) => {
    // ESTOS SHORCUTS PUEDEN SER A MI GUSTO, LAS TECLAS QUE YO QUIERA, ETC
    if(e.altKey && e.key === "a"){ // Si presiona la tecla Alt y después la letra a bota una alerta
        alert("Haz lanzado un alerta con el teclado");
    };
});