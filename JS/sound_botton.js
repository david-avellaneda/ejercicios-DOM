export default function musicBotton (activateMusic, deactivateMusic) {
    let music;
    const $music = document.createElement("audio"); // Crea un elemento del DOM 
    //$music.src = sound; // A este nuevo elemento en su atributo src pegale lo que venga en la variable sound
    $music.setAttribute("src", "assets/Sound_botton.mp3");  
    document.addEventListener("click", (e) => {
        if(e.target.matches(activateMusic)){// Detectar si el objeto que origina el evento "e.target" coincide con lo que traemos en la variable activateMusic "matches(activateMusic)"
            music = setTimeout(() => { // Se ejecuta una sola vez
                $music.play(); // Que active el audio
            }, 0);
            e.target.disabled = true;
        };
        if(e.target.matches(deactivateMusic)){ // Detectar si el objeto que origina el evento "e.target" coincide con lo que traemos en la variable activateMusic "matches(deactivateMusic)"
            clearTimeout(music);
            $music.pause(); 
            $music.currentTime = 0;
            document.querySelector(activateMusic).disabled = false;
        };
    });
};