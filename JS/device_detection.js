export default function userAgent(operatingSystem) {
    const $operatingSystem = document.getElementById(operatingSystem);
    const isMobile = {
        // El método match() se usa para obtener todas las ocurrencias de una expresión regular dentro de una cadena, en este caso dentro de userAgent.
        // i es una bandera de las expresiones regulares que busca sin importar mayúsculas y minúsculas
        android: () => navigator.userAgent.match(/android/i),
        ios: () => navigator.userAgent.match(/iPhone|iPod Touch|iPad/i),
        any: function () {
            return this.android() || this.ios()
        }
    };
    const isDesktop = {
        linux: () => navigator.userAgent.match(/linux/i),
        mac: () => navigator.userAgent.match(/mac/i),
        windows: () => navigator.userAgent.match(/windows/i),
        any: function () {
            return this.linux() || this.mac() || this.windows()
        }
    };
    const detetionBrowser = function() {
        let browser;
        let $containerLogos = document.querySelector(".browser-logos");
        if(navigator.userAgent.match(/edg/i)) {
            browser = "edge";
            // CONTENIDO EXCLUSIVO
            // $containerLogos.innerHTML = `<p><mark>Este contenido sólo se ve en Chrome lo siento:(</mark></p>`
            // $containerLogos.style.setProperty("text-align", "center");
            // $containerLogos.style.setProperty("font-size", "4rem");
            // += para que le agregue el contenido que tiene por defecto, es decir el nombre del sistema operativo y navegador, si solo ponemos "=" imprimirá lo que se ponga como en este ejemplo si lo abrimos en edge
        } else if(navigator.userAgent.match(/firefox/i)){
            browser = "firefox";
            $containerLogos.innerHTML += `<p style="margin-block-start:3rem"><mark>Este anuncio sólo se ve en Firefox 🤘</mark></p>`
            $containerLogos.style.setProperty("text-align", "center");
            $containerLogos.style.setProperty("font-size", "4rem");
        } else if(navigator.userAgent.match(/opr/i)){
            browser = "opera";
        } else if(navigator.userAgent.match(/chrome|chromium|crios/i)){
            browser = "chrome";
            $containerLogos.innerHTML += `<p style="margin-block-start:3rem"><mark>Este anuncio sólo se ve en Chrome 😎</mark></p>`
            $containerLogos.style.setProperty("text-align", "center");
            $containerLogos.style.setProperty("font-size", "4rem");
        } else if(navigator.userAgent.match(/safari/i)){
            browser = "safari";
        } else {
            alert("No sé qué navegador usas :(");         
        }
        const logo = document.querySelector(`.browser-logos .${browser}`); // Dentro de la clase .browser-logos seleccione el valor de la variable browser, entonces busca dentro del userAgent y que encuentre la primer coincidencia
        if(logo !== ""){ // Si logo es diferente a vacío entonces
            logo.style.opacity = "1";
        }
    };
    $operatingSystem.innerHTML = `<p class="content-system">${isMobile.any() ? isMobile.any() : isDesktop.any()}</p>`;
    const $contentSystem = document.querySelector('.content-system');
        $contentSystem.style.setProperty("color", "#f00143");
        $contentSystem.style.setProperty("margin-inline-start", ".5rem");
        $contentSystem.style.setProperty("transition", "all 2s ease");
    // Redirecciones
    // if(isMobile.android()){
    //     window.location.href = 'https://youtube.com'
            // Ya casi no se utilizan, mala prática
    // }
    //console.log(browser.edge())
    
    const showLogos = function () {
        const $browser_btn = document.getElementById('browser-name');
        let $browser_logos = document.querySelector('.browser-logos') ;
        $browser_btn.addEventListener("click", () => {
            $browser_logos.classList.add("show");
        });
    }
    detetionBrowser();
    showLogos();
};