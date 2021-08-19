const divClock = document.getElementById("realTimeClock");
export function digitalClock (clock, activateWatch, deactivateWatch) {
    const $clock = document.getElementById(clock),
        $activateWatch = document.getElementById(activateWatch),
        $deactivateWatch = document.getElementById(deactivateWatch);
    let realTimeClock;
    $activateWatch.addEventListener("click", (e) => {
        realTimeClock = setInterval(() => {
            let hours = new Date().getHours();
            let minutes = new Date().getMinutes();
            let seconds = new Date().getSeconds();
            const format = hours >= 12 ? "PM" : "AM"; // Si el diviendo es menor al divisor 5 / 7 el módulo será el dividendo "5", y si el diviendo es mayor el módulo será el residuo
            $clock.innerHTML = `<h3 class="realTimeClock-title">${hours % 12}:${minutes}:${seconds} ${format}</h3>`;
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