export default function detectGeolocation(id) {
    const $locationBtn = document.getElementById("location-btn"),
        $contentLocation = document.getElementById(id),
        $locationContainer = document.getElementById("location-container"),
        options = {
            enableHighAccuracy: true, // Para que haga un lectura
            timeout: 10000, // Tiempo de espera de la lectura
            maximumAge: 0, // Para que no guarde en caché las lecturas, si no cada vez leea una nueva
        };
    $locationBtn.addEventListener("click", () => {
        const success = location => { // En caso de éxito
            // console.log(location);
            $contentLocation.style.animationName = "location-content";
            $contentLocation.style.left = "0";
            let coordinates = location.coords;
            $contentLocation.innerHTML = `
                <p>Tu posición actual es:</p>
                <ul>
                    <li>Latitud: <b>${coordinates.latitude}</b></li>
                    <li>Longitud: <b>${coordinates.longitude}</b></li>
                    <li>Latitud: <b>${coordinates.accuracy}</b> metros, es decir <br> estás en un radio de ${coordinates.accuracy} metros</li>
                </ul>
                <div>
                    <a href="https://www.google.com/maps/@${coordinates.latitude},${coordinates.longitude},15z" target="_blank" rel="noreferrer noopener">Ver en Google Maps</a>
                </div>`;
            if(window.matchMedia("(min-width: 900px").matches){
                const $container_message_on_desktop = document.createElement("div");
                $container_message_on_desktop.classList.add("message-on-desktop");
                $container_message_on_desktop.innerHTML = `
                    <h4>Nota</h4>
                    <p>Si estás visitando este sitio web desde una computadora te recomiendo que para saber tu ubicación con más precisión, abras este sitio web desde un celular ya que el celular cuenta con un GPS y mostrará tu punto de ubicación exacto. La computadora no cuenta con GPS, cuenta con una ubicación pero no da información tan precisa ya que esta toma la ubicación de la conexión Wi-Fi.</p>
                `;
                $locationContainer.appendChild($container_message_on_desktop);
            };
        };
        const error = err => { // En caso de error, o sea de no tener el acceso a la ubicación o porque hubo un error al acceder a la ubicación
            $locationContainer.innerHTML = `
                <h3 style="margin-block-end: 2rem; text-align: center;">Lo siento sucedió un error: <mark>${err.message}</mark></h3>
                <p style="margin-block-end: 1rem">Este error <b>pudo</b> ser ocasionado por:</p>
                <ul style="text-align: center; max-width: 38rem;">
                    <p>No me diste acceso a tu ubicación 😞 o tu navegador no soporta algunos caracteres, te recomiendo utilizar Google Chrome</p>
                </ul>
            `;
            $locationContainer.style.flexDirection = 'column';
            $locationContainer.style.alignItems = 'center';
        }; 
        navigator.geolocation.getCurrentPosition(success, error, options);
        // Geolocation.watchPosition() se utiliza para registrar una función de controlador que se llamará automáticamente cada vez que la posición del dispositivo cambia. Para que diga la posición en tiempo real si se va moviendo
    });
};