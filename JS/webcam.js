function webcam(){
    const $containerTrue = document.getElementById("container-true"),
        $containerFalse = document.getElementById("container-false"),
        $containerVideo = document.getElementById('container-video'),
        $video = document.getElementById('video'),
        $select = document.getElementById('select');
    let currentStream;
    $select.addEventListener('click', () => {
        navigator.mediaDevices
            .getUserMedia({video:true, audio:false})
            .then(stream => {
                $video.srcObject = stream;
                $video.play();
                $containerVideo.style.width = "100%";
                $containerVideo.style.height = "auto";
                $containerVideo.style.marginBlockEnd = "10rem";
                $containerVideo.style.transform = "translateX(0%)";
            })
            .catch(error => { // EN CASO DE QUE NO ACCEDA A LA CÁMARA WEB MANDE UN ERROR es decir si el usuario no da permiso de acceder a la cámara
                const $content = document.createElement("p");
                $content.textContent = "Lo siento, no me dejaste acceder a tu cámara 😞";
                let $error = document.querySelector(".container-error");
                $error.style.transform = "translateX(0%)";
                $containerFalse.appendChild($content);
                $containerTrue.style.width = "0";
                $containerTrue.style.height = "0";
                $containerTrue.style.overflow = "hidden";
            });
    });
};
webcam()