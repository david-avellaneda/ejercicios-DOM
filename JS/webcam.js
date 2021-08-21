function webcam(){
    const $containerTrue = document.getElementById("container-true"),
        $containerFalse = document.getElementById("container-false"),
        $containerVideo = document.getElementById('container-video'),
        $video = document.getElementById('video'),
        $containerSelect = document.getElementById('active-camera'),
        $containerSection6 = document.getElementById('container-section6'),
        $listaDeDispositivos = document.getElementById('listaDeDispositivos');
    $containerSelect.addEventListener('click', () => {
        // La función que es llamada después de que ya se dieron los permisos
        // Lo que hace es llenar el select con los dispositivos obtenidos
        const llenarSelectConDispositivosDisponibles = () => {
            $listaDeDispositivos.innerHTML = "";
            navigator.mediaDevices.enumerateDevices()
            .then((devices) => {
                const videoDevices = [];
                devices.forEach((DEVICE) => {
                    const tipo = DEVICE.kind;
                    if (tipo === "videoinput") videoDevices.push(DEVICE);
                });
                // Vemos si encontramos algún dispositivo, y en caso de que si, entonces llamamos a la función
                if (videoDevices.length > 0) {
                    // Llenar el select
                    $listaDeDispositivos.appendChild(document.createElement("option"));
                        videoDevices.forEach((DEVICE) => { // Este DEVICE no es el mismo de arriba ya que actua el scope
                            const option = document.createElement('option');
                            option.value = DEVICE.deviceId;
                            $listaDeDispositivos.appendChild(option);
                            let regExp_frontCamera = /front/ig;
                            let frontCamera = regExp_frontCamera.test(DEVICE.label);
                            // console.log(frontCamera)
                            if(frontCamera) {
                                option.text = DEVICE.label;
                                $video.style.transform = "scaleX(-1)";
                            }
                            option.text = DEVICE.label;
                        });
                    }
                });
        };
        (function () { 
            //Aquí guardaremos el stream globalmente
            let stream;
            // Comenzamos pidiendo los dispositivos
            navigator.mediaDevices.enumerateDevices()
                .then((dispositivos) => {
                    // Vamos a filtrarlos y guardar aquí los de vídeo
                    const dispositivosDeVideo = [];
                    // Recorrer y filtrar
                    dispositivos.forEach(function (dispositivo) {
                        const tipo = dispositivo.kind;
                        if (tipo === "videoinput") dispositivosDeVideo.push(dispositivo);
                    });
                    // Vemos si encontramos algún dispositivo, y en caso de que si, entonces llamamos a la función
                    // y le pasamos el id de dispositivo
                    if (dispositivosDeVideo.length > 0) mostrarStream(dispositivosDeVideo[0].deviceId); 
                    // Mostrar stream con el ID del primer dispositivo, luego el usuario puede cambiar
                });
            const mostrarStream = idDeDispositivo => {
                navigator.getUserMedia({
                        video: {deviceId: idDeDispositivo}, // Justo aquí indicamos cuál dispositivo usar
                        audio: false
                    },
                    function(streamObtenido) {
                        $containerSection6.style.height = "0";
                        $containerSection6.style.transform = "translateX(-100%)";
                        $listaDeDispositivos.style.marginBlockEnd = "2rem"
                        $containerVideo.style.height = "auto";
                        $containerVideo.style.transform = "translateX(0%)";
                        if(navigator.userAgent.match(/linux/i) || navigator.userAgent.match(/mac os/i) || navigator.userAgent.match(/windows/i)){ // Detecta si es linux mac o windows para saber si es computador
                            $video.style.transform = "scaleX(-1)";
                        } if (navigator.userAgent.match(/android/i)) {
                            $video.style.transform = "scaleX(1)";
                        }
                        // Aquí ya tenemos permisos, ahora sí llenamos el select,
                        // pues si no, no nos daría el nombre de los dispositivos
                        llenarSelectConDispositivosDisponibles();
                        // Escuchar cuando seleccionen otra opción y entonces llamar a esta función
                        $listaDeDispositivos.onchange = () => {
                            // Detener el stream
                            if(stream){
                                stream.getTracks().forEach((track) => {
                                    track.stop();
                                });
                            }
                            // Mostrar el nuevo stream con el dispositivo seleccionado
                            mostrarStream($listaDeDispositivos.value);
                        }
                        // Simple asignación
                        stream = streamObtenido;
                        // Mandamos el stream de la cámara al elemento de vídeo
                        $video.srcObject = stream;
                        $video.play();
                    }, function (error) { // EN CASO DE QUE NO ACCEDA A LA CÁMARA WEB MANDE UN ERROR es decir si el usuario no da permiso de acceder a la cámara
                        console.log("Permiso denegado o error: ", error);
                        const $content = document.createElement("p");
                        $content.textContent = "Lo siento, no me dejaste acceder a tu cámara 😞";
                        let $error = document.querySelector(".container-error");
                        $error.style.transform = "translateX(0%)";
                        $containerFalse.appendChild($content);
                        $containerTrue.style.width = "0";
                        $containerTrue.style.height = "0";
                        $containerTrue.style.overflow = "hidden";
                    });
            }
        })();
    });
};
webcam()