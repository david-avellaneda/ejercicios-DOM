export default function userAgent(operatingSystem, userBrowser) {
    const $container = document.getElementById("user-agent"),
        $operatingSystem = document.getElementById(operatingSystem),
        $userBrowser = document.getElementById(userBrowser);
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
    const browser = {
        chrome: () => navigator.userAgent.match(/chrome/i),
        firefox: () => navigator.userAgent.match(/firefox/i),
        opera: () => navigator.userAgent.match(/opera/i),
        safari: () => navigator.userAgent.match(/safari/i),
        edge: () => navigator.userAgent.match(/edg/i),
        any: function () {
            return this.edge() || this.firefox() || this.opera() || this.chrome() || this.safari()
            // Que primero busque si existe edge ya que dentro de la cadena de texto que da User Agent sale chrome y safari de ultimas pone el navegador con el que está
        }
    };
    $operatingSystem.innerHTML = `<p class="content-system">${isMobile.any() ? isMobile.any() : isDesktop.any()}</p>`;
    const $contentSystem = document.querySelector('.content-system');
        $contentSystem.style.setProperty("color", "#f00143");
        $contentSystem.style.setProperty("margin-inline-start", ".5rem");
    
    $userBrowser.innerHTML = `<p class="content-browser">${browser.any()}</p>`;
    const $contentBrowser = document.querySelector('.content-browser');
        $contentBrowser.style.setProperty("color", "#1fa20f");
        $contentBrowser.style.setProperty("margin-inline-start", ".5rem");
        // CONTENIDO EXCLUSIVO
    if(browser.edge()) {
        $container.innerHTML = `<p><mark>Este contenido sólo se ve en Chrome lo siento:(</mark></p>`
        $container.style.setProperty("text-align", "center");
        $container.style.setProperty("font-size", "4rem");
        // += para que le agregue el contenido que tiene por defecto, es decir el nombre del sistema operativo y navegador, si solo ponemos "=" imprimirá lo que se ponga como en este ejemplo si lo abrimos en edge
    };
    if(browser.chrome()) {
        $container.innerHTML += `<p style="margin-block-start:3rem"><mark>Este anuncio sólo se ve en Chrome 😎</mark></p>`
        $container.style.setProperty("text-align", "center");
        $container.style.setProperty("font-size", "4rem");
        };
    if(browser.firefox()) {
        $container.innerHTML += `<p style="margin-block-start:3rem"><mark>Este anuncio sólo se ve en Firefox 🤘</mark></p>`
        $container.style.setProperty("text-align", "center");
        $container.style.setProperty("font-size", "4rem");
    };
    // Redirecciones
    // if(isMobile.android()){
    //     window.location.href = 'https://youtube.com'
            // Ya casi no se utilizan, mala prática
    // }
    //console.log(browser.edge())
};