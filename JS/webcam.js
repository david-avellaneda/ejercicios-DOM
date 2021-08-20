// https://programmerclick.com/article/5793808195/
const n_md = navigator.mediaDevices;
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
            }) // 
        // if(n_md.getUserMedia){
        //     if(typeof currentStream !== "undefined") stopMediaTracks(currentStream);
        // const videoLimitations = {};
        // if($select.value === "") videoLimitations.facingMode = "environment"
        // else videoLimitations.deviceId = {exact: $select.value}
        // const limitations = {video:true, audio:false};
        // n_md.getUserMedia(limitations).then(stream => {currentStream = stream; $video.srcObject = stream; return n_md.enumerateDevices();}).then(gotDevices).catch(error => {
        //     $containerVideo.style.width = "0";
        //     $containerVideo.style.height = "auto";
        //     $containerVideo.style.marginBlockEnd = "0";
        //     $containerVideo.style.transform = "translateX(-100%)";
        // });
        // function gotDevices(mediaDevices){
        //     $select.innerHTML = "";
        //     let count = 1;          
        //     mediaDevices.forEach(mediaDevice => {
        //         if (mediaDevice.kind === 'videoinput') {
        //             const $camera = document.createElement('div');
        //                 option = document.createElement('h4');
        //             $containerVideo.style.width = "100%";
        //             $containerVideo.style.height = "auto";
        //             $containerVideo.style.marginBlockEnd = "10rem";
        //             $containerVideo.style.transform = "translateX(0%)";
        //             $camera.classList.add('camera')
        //             $camera.style.width = "2rem";
        //             $camera.style.display = "flex";
        //             $camera.innerHTML = `<svg id="pictureCamera" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 512 426" style="enable-background:new 0 0 512 426; fill:#0bb92b;" xml:space="preserve">
        //                                     <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)">
        //                                         <path d="M1615,5041c-115-37-225-123-281-218c-53-90-66-148-71-305l-5-148H873c-428,0-453-3-574-66S73,4115,27,3981l-22-66L2,2670
        //                                             c-2-875,1-1264,8-1310c32-187,171-353,356-427l69-28h2125h2125l69,28c185,74,324,240,356,427c7,46,10,435,8,1310l-3,1245l-22,66
        //                                             c-46,134-151,260-272,323s-146,66-574,66h-385l-5,148c-5,157-18,215-71,305c-57,97-168,182-286,219c-51,16-127,18-945,17
        //                                             C1757,5058,1660,5056,1615,5041z M2776,3865c858-150,1302-1120,856-1870c-333-561-1055-769-1636-472c-369,188-609,523-671,937
        //                                             c-68,444,126,904,496,1180c143,107,339,192,514,223C2445,3883,2666,3884,2776,3865z"/>
        //                                         <path d="M2445,3454c-379-61-667-363-704-736c-39-404,210-766,607-880c110-32,314-32,424,0c335,96,573,374,606,707
        //                                             c25,258-57,493-237,672c-99,99-239,180-376,217C2705,3451,2502,3463,2445,3454z"/>
        //                                     </g>
        //                                 </svg>`
        //             $select.appendChild($camera);
        //             $select.style.justifyContent = 'space-around';
        //             $select.style.alignItems = 'center';
        //             option.value = mediaDevice.deviceId;
        //             const label = mediaDevice.label || `Camera ${count++}`;
        //             const textNode = document.createTextNode(label);
        //             option.appendChild(textNode);
        //             $select.appendChild(option);
        //         }
        //     });
        // };
        // function stopMediaTracks(stream) {
        //     stream.getTracks().forEach(track => track.stop());
        // };
        // n_md.enumerateDevices().then(gotDevices)
        // }
    });
};
webcam()