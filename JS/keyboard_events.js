let x = 0, y = 0;
export default function moveBall (e, stage, ball) {
    const $stage = document.querySelector(stage),
        $ball = document.querySelector(ball),
        ballLimit = $ball.getBoundingClientRect(),
        stageLimit = $stage.getBoundingClientRect();
        // console.log(e.keyCode);
        // console.log(ballLimit, stageLimit);
    switch (e.keyCode) {
        case 37: // Left
            if(ballLimit.left > stageLimit.left) {
                x--;
            };
                // Si el límite de la pelota es mayor al límite del escenario en el mismo margen, disminuye el valor de X
        break;
        case 38: // Up
            if(ballLimit.top > stageLimit.top){
                e.preventDefault(); 
                // PreventDefault() se utiliza para detener una acción por omisión, en este caso con las flechas conup y down nos desplazamos por la web, esto hace que si la bola llega a tocar el borde superior siga su curso normal, comportamiento por defecto, es decir que puede desplazarse con normalidad con las flechas. NO LO UTILIZAMOS EN X YA QUE NO SE  MANEJA EL SCROLL HORIZONTAL
                y--; 
                // Es la WEB y hacia arriba es negativa
            }
        break;
        case 39: // Right
            if(ballLimit.right <  stageLimit.right) x++;
        break;
        case 40: // Down
            if(ballLimit.bottom < stageLimit.bottom){
                e.preventDefault();
                y++;
            }
        break;
        default:
        break;
    };
    $ball.style.transform = `translate(${Math.round(x*10)}px, ${y*10}px )`;
};