export default function webcam(id, mediaQuery){
    // El método Window.matchMedia() devuelve un nuevo objeto MediaQueryList que representa los analizados de la media query 
    let breakpoint = window.matchMedia(mediaQuery);
    const responsive = (e) => {
        // // El método matches() comprueba si el Element sería seleccionable por el selector CSS especificado en la cadena; en caso contrario, retorna false.
        if(e.matches) {
            document.getElementById(id).innerHTML = `
                <div class="buttons">
                    <button class="button-camera skeleton loading" id="open-camera-desktop" type="button" aria-label="Acceder a la cámara de tu computadora">
                        <svg class="contentVisibility" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 512 426" style="enable-background:new 0 0 512 426;" xml:space="preserve">
                            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)">
                                <path d="M1615,5041c-115-37-225-123-281-218c-53-90-66-148-71-305l-5-148H873c-428,0-453-3-574-66S73,4115,27,3981l-22-66L2,2670   c-2-875,1-1264,8-1310c32-187,171-353,356-427l69-28h2125h2125l69,28c185,74,324,240,356,427c7,46,10,435,8,1310l-3,1245l-22,66   c-46,134-151,260-272,323s-146,66-574,66h-385l-5,148c-5,157-18,215-71,305c-57,97-168,182-286,219c-51,16-127,18-945,17   C1757,5058,1660,5056,1615,5041z M2776,3865c858-150,1302-1120,856-1870c-333-561-1055-769-1636-472c-369,188-609,523-671,937   c-68,444,126,904,496,1180c143,107,339,192,514,223C2445,3883,2666,3884,2776,3865z"/>
                                <path d="M2445,3454c-379-61-667-363-704-736c-39-404,210-766,607-880c110-32,314-32,424,0c335,96,573,374,606,707   c25,258-57,493-237,672c-99,99-239,180-376,217C2705,3451,2502,3463,2445,3454z"/>
                            </g>
                        </svg>
                    </button>
                    <h4 class="skeleton loading">
                        <div class="contentVisibility">Acceder a la cámara <br> de tu computadora</div>
                    </h4>
                </div>
                <div class="buttons">
                    <input class="input-gallery" id="input-gallery-desktop" type="file" accept="image/*" />
                    <button class="button-gallery skeleton loading" id="open-gallery-desktop" type="button" aria-label="Acceder a las fotos de tu computadora">
                        <svg class="contentVisibility" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)">
                                <path d="M453,4945c-35-8-93-28-130-46c-93-45-217-169-261-261c-66-136-63-15-60-2111L5,625l27-74c64-174,198-306,370-362l73-24   h2085h2085l73,24c172,56,306,188,370,362l27,74l3,1902c3,2096,6,1975-60,2111c-44,92-168,216-260,260c-134,65,0,62-2243,61   C876,4959,504,4956,453,4945z M3481,4071c117-37,226-122,300-234c179-274,74-650-222-796c-360-177-773,61-805,464   c-21,263,173,520,439,580C3273,4104,3395,4097,3481,4071z M1858,2941c20-11,50-33,67-50c16-18,250-320,520-673   c450-589,494-643,544-671c64-36,144-40,207-11c22,10,114,91,205,180c175,171,194,184,285,184c59,0,133-41,176-97   c82-109,613-871,634-912c41-75,25-144-40-175c-31-15-191-16-1858-16c-1755,0-1825,1-1858,19c-47,24-80,75-80,120c0,20,11,61,23,91   c50,120,980,1947,1005,1974C1740,2960,1797,2972,1858,2941z"/>
                            </g>
                        </svg>
                    </button>
                    <h4 class="skeleton loading">
                        <div class="contentVisibility">Escoge una foto <br> de tu computadora</div>
                    </h4>
                </div>
            `;
            const $openCamera_desktop = document.getElementById('open-camera-desktop'),
                $containerVideo = document.getElementById('container-video'),
                $video = document.getElementById('video'),
                $gallery_desktop = document.getElementById('input-gallery-desktop'),
                $openGallery_desktop = document.getElementById('open-gallery-desktop'),
                $containerPhoto = document.getElementById('container-photo'),
                $photo = document.getElementById('photo');
            $containerPhoto.style.transform = "translateX(100%)";
            $openCamera_desktop.addEventListener('click', () => {
                if(navigator.mediaDevices.getUserMedia){
                    navigator.mediaDevices
                        .getUserMedia({video: true, audio: false})
                        .then(stream => {
                            $video.srcObject = stream;
                            $video.play();
                            $video.style.transform = "scaleX(-1)";
                            $video.style.height = "auto";
                            $containerVideo.style.margin = "0 0 9rem";
                            $containerVideo.style.transform = "translateX(0)";
                            $containerVideo.style.position = "inherit";
                        })
                        .catch(err => {
                            const $photoVideo = document.getElementById("photo-video");
                            $photoVideo.innerHTML = `
                                <h4 style="margin-block-end:1.5rem;">Lo siento no pude acceder a la cámara de tu computadora :(</h4>
                                <p style="margin-block-end:.8rem;color: #0c57ff;">Esto pudo ser ocasionado por:</p>
                                <ul>
                                    <li>No me diste acceso a tu cámara cuando presionaste el icono de la cámara que está en color verde 😞.</li>
                                    <li>Tu navegador no soporta algunos caracteres, te recomiendo abrir esta página desde el navegador Google Chrome.</li>
                                    <li>No cuentas con una cámara en tu computadora.</li>
                                </ul>
                            `;
                            $photoVideo.style.display = "flex",
                            $photoVideo.style.alignItems = "center";
                            $photoVideo.style.flexDirection = "column";
                        });
                        // El método then() retorna una Promesa. Recibe dos argumentos: funciones callback  para los casos de éxito y fallo de Promise. EN CASO DE QUE SEA UN ÉXITO ME VA A ESTAR MANDANDO LA INFORMACIÓN DE (stream) LA CÁMARA WEB
                        // El método catch() retorna una Promise y solo se ejecuta en los casos en los que la promesa se marca como Reject. EN CASO DE QUE NO ACCEDA A LA CÁMARA WEB MANDE UN ERROR es decir si el usuario no da permiso de acceder a la cámara
                };
                $containerPhoto.style.height = "0";
                $containerPhoto.style.margin = "0";
                $containerPhoto.style.transform = "translateX(100%)";
            });
            $openGallery_desktop.addEventListener('click', () => {
                $gallery_desktop.click();
                $gallery_desktop.addEventListener('change', (e) => {
                    $containerVideo.style.position = "absolute";
                    $containerVideo.style.top = "0";
                    $containerVideo.style.transform = "translateX(-120%)";
                    $containerVideo.style.transition = "all 2s ease";
                    $containerPhoto.style.width = "100%";
                    $containerPhoto.style.height = "auto";
                    $containerPhoto.style.margin = "0 0 9rem 0";
                    $containerPhoto.style.transform = "translateX(0)"
                    $photo.src = URL.createObjectURL(e.target.files[0]);
                });
            });
        }
        else { 
            document.getElementById(id).innerHTML = `
                <div class="buttons">
                    <input class="input-camera" id="input-camera-mobile" type="file" accept="image/*" capture="camera" />
                    <button class="button-camera skeleton loading" id="open-camera-mobile" type="button" aria-label="Acceder a tu cámara">
                        <svg class="contentVisibility" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 512 426" style="enable-background:new 0 0 512 426;" xml:space="preserve">
                            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)">
                                <path d="M1615,5041c-115-37-225-123-281-218c-53-90-66-148-71-305l-5-148H873c-428,0-453-3-574-66S73,4115,27,3981l-22-66L2,2670   c-2-875,1-1264,8-1310c32-187,171-353,356-427l69-28h2125h2125l69,28c185,74,324,240,356,427c7,46,10,435,8,1310l-3,1245l-22,66   c-46,134-151,260-272,323s-146,66-574,66h-385l-5,148c-5,157-18,215-71,305c-57,97-168,182-286,219c-51,16-127,18-945,17   C1757,5058,1660,5056,1615,5041z M2776,3865c858-150,1302-1120,856-1870c-333-561-1055-769-1636-472c-369,188-609,523-671,937   c-68,444,126,904,496,1180c143,107,339,192,514,223C2445,3883,2666,3884,2776,3865z"/>
                                <path d="M2445,3454c-379-61-667-363-704-736c-39-404,210-766,607-880c110-32,314-32,424,0c335,96,573,374,606,707   c25,258-57,493-237,672c-99,99-239,180-376,217C2705,3451,2502,3463,2445,3454z"/>
                            </g>
                        </svg>
                    </button>
                    <h4 class="skeleton loading">
                        <div class="contentVisibility">Tomar una foto</div>
                    </h4>
                </div>
                <div class="buttons">
                    <input class="input-gallery" id="input-gallery-mobile" type="file" accept="image/*" />
                    <button class="button-gallery skeleton loading" id="open-gallery-mobile" type="button" aria-label="Acceder a las fotos de tu dispositivo">
                        <svg class="contentVisibility" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)">
                                <path d="M1253,4675c-174-47-317-182-376-354l-22-66l-3-1215c-2-798,1-1242,7-1295c13-95,67-215,130-287c51-58,136-115,221-148   l65-25l1683-3c1853-3,1745-6,1874,59c130,66,247,220,277,367c8,37,11,428,11,1280c0,1358,3,1292-65,1421c-60,114-166,207-290,254   l-60,22l-1700,2C1567,4689,1297,4687,1253,4675z M4625,4256c69-29,65,21,63-831l-3-769l-352,409c-238,278-365,419-395,437   c-131,80-285,78-411-5c-34-23-167-175-459-525l-411-493l-152,150c-191,189-222,206-370,206c-164,0-163,1-537-373l-318-317v1018   c0,1125-4,1063,63,1092C1391,4276,4574,4277,4625,4256z"/>
                                <path d="M1790,4032c-73-24-125-59-183-121c-155-166-149-420,14-584c246-246,659-111,719,234c24,136-26,275-134,377   c-84,78-148,104-271,109C1867,4049,1831,4046,1790,4032z"/>
                                <path d="M267,2325C110,1802,6,1438,3,1401c-17-183,97-385,260-464c31-15,232-75,445-132c359-96,808-216,2372-635   C3413,80,3712,5,3745,3c172-14,354,80,442,228c20,34,69,173,133,378c56,178,104,330,107,338c4,11-257,13-1578,13   c-1527,0-1587,1-1678,20c-251,52-474,233-568,463c-69,168-66,122-72,974l-6,771L267,2325z"/>
                            </g>
                        </svg>
                    </button>
                    <h4 class="skeleton loading">
                        <div class="contentVisibility">Escoge una foto</div>
                    </h4>
                </div>
            `;
            const $camera_mobile = document.getElementById('input-camera-mobile'),
                $openCamera_mobile = document.getElementById('open-camera-mobile'),
                $gallery_mobile = document.getElementById('input-gallery-mobile'),
                $openGallery_mobile = document.getElementById('open-gallery-mobile'),
                $photo = document.getElementById('photo');
            $openCamera_mobile.addEventListener('click', () => {
                $camera_mobile.click();
                $camera_mobile.addEventListener('change', (e) => {
                    $photo.src = URL.createObjectURL(e.target.files[0]);
                    $photo.style.border = "solid .3rem #000";
                });
            }); 
            $openGallery_mobile.addEventListener('click', () => {
                $gallery_mobile.click();
                $gallery_mobile.addEventListener('change', (e) => {
                    $photo.src = URL.createObjectURL(e.target.files[0]);
                    $photo.style.border = "solid .3rem #000";
                });
            });
        };
    };
    breakpoint.addEventListener("change", responsive);
    responsive(breakpoint);
};