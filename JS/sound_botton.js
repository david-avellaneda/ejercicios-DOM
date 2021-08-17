export default function musicBotton (activateMusic, deactivateMusic) {
    let music;
    const $activateMusic = document.getElementById(activateMusic),
        $deactivateMusic = document.getElementById(deactivateMusic);
    const $music = document.createElement("audio"); // Crea un elemento del DOM 
    //$music.src = sound; // A este nuevo elemento en su atributo src pegale lo que venga en la variable sound
    $music.setAttribute("src", "assets/Sound_botton.mp3");  
    $activateMusic.addEventListener("click", () => {
        music = setTimeout(() => { // Se ejecuta una sola vez
            $music.play(); // Que active el audio
        }, 0);
        $deactivateMusic.addEventListener("click", () => {
            clearTimeout(music);
            $music.pause(); 
            $music.currentTime = 0; // Que empiece en el segundo 0
        });
    });
};