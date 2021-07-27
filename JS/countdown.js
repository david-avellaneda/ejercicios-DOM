const $countdown = document.querySelector(".countdown"),
    $days = document.getElementById("days"),
    $hours = document.getElementById("hours"),
    $minutes = document.getElementById("minutes"),
    $seconds = document.getElementById("seconds"),
    $timeInDays = document.querySelector(".timeInDays"),
    $timeInHours = document.querySelector(".timeInHours"),
    $timeInMinutes = document.querySelector(".timeInMinutes"),
    $timeInSeconds = document.querySelector(".timeInSeconds");
export default function countdown(dateLimit) {
    const countdownDate = new Date(dateLimit).getTime(); // getTime obtenemos la fecha en milisegundos para hacer más fácil los cálculos
    let countdownCounter = setInterval(() => {
        let now = new Date().getTime(), // La fecha de hoy, tiempo real en milisegundos
            timeLimit = countdownDate - now;
        let days = Math.floor(timeLimit / (1000 * 60 * 60 * 24));
            $days.innerHTML = `<h3>${days}</h3>`;
            if(days === 1) $timeInDays.innerHTML = `<h3>Día</h3>`;
            if(days > 1 || days === 0) $timeInDays.innerHTML = `<h3>Días</h3>`;
        let hours = ("0" + Math.floor((timeLimit % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2); // EL NÚMERO "0" QUE ESTÁ AL LADO ES PARA QUE CUANDO LLEGUE A LA HORA 9 IMPRIMA 09 CON .slice(-2) SIRVE PARA RECORTAR, COMO EL VALOR NEGATIVO VA HACIA ATRÁS ES DECIR QUE VA A TOMAR DE DERECHA A IZQUIERDA, DEL ÚLTIMO NÚMERO EN LA DERECHA HACIA EL SEGUNDO HACIA LA IZQUIERDA, Y ASÍ NO SALDRÁ EL 0 CUNADO SEAN LAS 11 12 13 ETC, entonces cuando sea la hora 9 solo imprimirá 9 y el 0 se va a añadir gracias al slice
            $hours.innerHTML = `<h3>${hours}</h3>`;
            if(hours == 1) $timeInHours.innerHTML = `<h3>Hora</h3>`;
            if(hours > 1 || hours == 0) $timeInHours.innerHTML = `<h3>Horas</h3>`;
        let minutes = ("0" + Math.floor((timeLimit % (1000 * 60 * 60)) / (1000 * 60))).slice(-2);
            $minutes.innerHTML = `<h3>${minutes}</h3>`;
            if(minutes == 1) $timeInMinutes.innerHTML = `<h3>Minuto</h3>`;
            if(minutes > 1 || minutes == 0) $timeInMinutes.innerHTML = `<h3>Minutos</h3>`;
        let seconds = ("0" + Math.floor((timeLimit % (1000 * 60)) / 1000)).slice(-2);
            $seconds.innerHTML = `<h3>${seconds}</h3>`;
            if(seconds == 1) $timeInSeconds.innerHTML = `<h3>Segundo</h3>`;
            if(seconds > 1 || seconds == 0) $timeInSeconds.innerHTML = `<h3>Segundos</h3>`;
        // console.log(countdownDate, now, timeLimit); // limitTime es la diferencia de tiempo, como la distancia en milisegundos entre fechas
        if(timeLimit < 0){
            clearInterval(countdownCounter);
            $countdown.innerHTML = `<p class="textContent">Feliz navidad 🥳🥳🥳</p>`
            const $textContent = document.querySelector(".textContent");
            $textContent.style.setProperty("text-align", "center");
            $textContent.style.setProperty("line-height", "2.8rem");
        };
    }, 1000);
};