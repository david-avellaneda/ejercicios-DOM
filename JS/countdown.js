const days = document.querySelector(".days"),
    hours = document.querySelector(".hours"),
    minutes = document.querySelector(".minutes"),
    seconds = document.querySelector(".seconds");

let timeLeft = {
    d:0, h:0, m:0, s:0,
};
let totalSeconds = 0;
export default function init() {
    totalSeconds = Math.round((new Date("12.24.2021") - new Date()) / 1000); // 100 milisegundos = 1s
    setTimeLeft();
    let interval = setInterval(() => {
        if(totalSeconds < 0 ){
            clearInterval(interval);
        };
        countTime();
        //console.log(timeLeft);
    }, 1000);
};
function countTime() {
    if(totalSeconds > 0){
        --timeLeft.s; // El operador de decremento (--) disminuye (o resta de a uno) su operando y retorna un valor. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Decrement
        if(timeLeft.m >= 0 && timeLeft.s < 0){
            timeLeft.s = 59;
            --timeLeft.m;
            if(timeLeft.h >= 0 && timeLeft.m < 0){
                timeLeft.m = 59;
                --timeLeft.h;
                if(timeLeft.d >= 0 && timeLeft.h < 0){
                    timeLeft.h = 23;
                    --timeLeft.d;
                };
            };
        };
    };
    --totalSeconds;
    printTime();
};
function printTime() {
    days.innerText = timeLeft.d;
    hours.innerText = timeLeft.h;
    minutes.innerText = timeLeft.m;
    seconds.innerText = timeLeft.s;
};
function setTimeLeft() {
    timeLeft.d = Math.round(totalSeconds / (60 * 60 * 24));
    timeLeft.h = Math.round(totalSeconds / (60 * 60) % 24);
    timeLeft.m = Math.round(totalSeconds / (60) % 60);
    timeLeft.s = Math.round(totalSeconds % 60);
}