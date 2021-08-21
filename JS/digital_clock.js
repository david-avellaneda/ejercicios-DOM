const divClock = document.getElementById("realTimeClock");
export function digitalClock (clock, activateWatch, deactivateWatch) {
    const $clock = document.getElementById(clock),
        $activateWatch = document.getElementById(activateWatch),
        $deactivateWatch = document.getElementById(deactivateWatch);
    let realTimeClock;
    $clock.innerHTML = null;
    $activateWatch.addEventListener("click", (e) => {
        divClock.style.setProperty("transform", "translateX(-100%)");
        runClock();
    });
    function runClock() {
        realTimeClock = setInterval(() => {
            let hours = new Date().getHours(),
                minutes = new Date().getMinutes(),
                seconds = new Date().getSeconds();
            const format = hours >= 12 ? "PM" : "AM"; // Si el diviendo es menor al divisor 5 / 7 el módulo será el dividendo "5", y si el diviendo es mayor el módulo será el residuo
            minutes = ("0" + minutes).slice(-2);
            seconds = ("0" + seconds).slice(-2);
            $clock.innerHTML = `
                <h3 class="realTimeClock-title">${("0" + hours % 12).slice(-2)}:${minutes}:${seconds} ${format}</h3>
            `;
            // Si el diviendo es menor al divisor 5 / 7 el módulo será el dividendo "5", y si el diviendo es mayor el módulo será el residuo
            divClock.style.setProperty("width","100%");
            divClock.style.setProperty("height","3rem");
            divClock.style.setProperty("transform", "translateX(0%)")
        }, 1000);
        // e.target.disabled = true; // Para que deshabilite el boton
        $deactivateWatch.addEventListener("click", () => {
            clearInterval(realTimeClock);
            divClock.style.setProperty("height","0");
            divClock.style.setProperty("transform", "translateX(-100%)");
            setTimeout(() => {$clock.innerHTML = null;}, 1200);
            // $activateWatch.disabled = false;
        });
    }
};