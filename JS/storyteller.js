export default function storyteller(){
    const $languageTypes = document.getElementById('language-types'),
        $speechText = document.getElementById('speech-text'),
        $speechBtn = document.getElementById('speech-btn'),
        readText = new SpeechSynthesisUtterance(); // Nos permite interactuar con las voces de NUESTRO SISTEMA OPERATIVO
    // console.log(readText);
    let voices = []; // Para capturar las voces que vienen en speechSynthesis.getVoices() ya que nos devuelve un nodeList y esto es un array
    document.addEventListener('DOMContentLoaded', () => {
        // console.log(speechSynthesis);
        // // Aparece un array vacio porque se necesita declarar el evento voiceschanged que viene dentro de speechSynthesis para detectar las voces
        // console.log(speechSynthesis.getVoices());
        speechSynthesis.addEventListener('voiceschanged', e => {
            // console.log(speechSynthesis.getVoices()); // Aquí ya detecta las voces
            // console.log(e); // Aquí vemos el evento voiceschanged
            voices = speechSynthesis.getVoices(); // Llenamos la variable voices con lo que viene en speechSynthesis.getVoices()
            // console.log(voices);    
            voices.forEach(voice => {
                const $option = document.createElement('option');
                // Le asignamos como valor el nombre de la voz que es lo que viene en CADA UNA de las voices en su atributo name
                // console.log(voice.name);
                $option.value = voice.name; 
                $option.textContent = `${voice.name} - ${voice.lang}`;
                $languageTypes.appendChild($option); // Le agregamos las opciones al select
            });
            e.preventDefault();
        });
    });
    $languageTypes.addEventListener('change', e => { // Para que pueda cambiar y escoger el tipo de voz disponible
        readText.voice = voices.find(voice => voice.name === e.target.value);
        // readText es igual a "new SpeechSynthesisUtterance()", esta variable almacena ese valor. SpeechSynthesisUtterance() tiene un atributo que se llama voice y viene con un valor = null, ESTE VOICE ES LA VOZ QUE TIENE ASIGNADA
        // El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada, es decir la voz que se escogió.
        // Lo que va adentro del find() dice, busca una voz = voice, si la propiedad voice.name coincide === con lo que viene en $option.value del select entonces asigna esa voz
        // console.log(readText); // Imprirá un speechSyntesisUtterance, su valor voice ya no vendrá igual null, si no con el valor del select, es decir con el nombre de la voz
        e.preventDefault();
    });
    $speechBtn.addEventListener('click', e => {
        readText.text = $speechText.value; // En variable readText accedemos al atributo text = SpeechSynthesisUtterance contiene un  atributo "text", y esta variable readText será igual a lo que viene en $speechText.value, ese value es el texto que ingresa el usuario
        speechSynthesis.speak(readText); // Para que lea la variable readText, la ejecutamos accediendo al atributo speak de speechSynthesis
        e.preventDefault();
    });
};