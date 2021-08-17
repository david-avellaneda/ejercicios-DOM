const divClock = document.getElementById("realTimeClock");
export function digitalClock (clock, activateWatch, deactivateWatch) {
    const $clock = document.getElementById(clock),
        $activateWatch = document.getElementById(activateWatch),
        $deactivateWatch = document.getElementById(deactivateWatch);
    let realTimeClock;
    $activateWatch.addEventListener("click", (e) => {
        realTimeClock = setInterval(() => {
            let watch = new Date().toLocaleTimeString();
            $clock.innerHTML = `<h3 class="realTimeClock-title">${watch}</h3>`;
            divClock.style.setProperty("width","100%");
            divClock.style.setProperty("margin-block-start","3rem");
            divClock.style.setProperty("display","flex");
            divClock.style.setProperty("justify-content","center");
            divClock.style.setProperty("font-size","2rem");
            divClock.style.setProperty("transition", "all .3s ease-in");
        }, 1000);
        // e.target.disabled = true; // Para que deshabilite el boton
        $deactivateWatch.addEventListener("click", () => {
            clearInterval(realTimeClock);
            $clock.innerHTML = null;
            divClock.style.setProperty("margin-block-start","0rem");
            // $activateWatch.disabled = false;
        });
    });
};