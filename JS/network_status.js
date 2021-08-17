export default function networkStatus(){
    let $modalContainer_online = document.getElementById("container-online"),
        $modal_online = document.querySelectorAll(".modal-online")[0];
    $modal_online.style.transform = "translateY(-250%)";
    let $modalContainer_offline = document.getElementById("container-offline"),
        $modal_offline = document.querySelectorAll(".modal-offline")[0],
        $close_offline = document.getElementById("closeBtn-offline");
    $modal_offline.style.transform = "translateY(-250%)";
    if(navigator.onLine) {
        $modalContainer_offline.style.opacity = "0";
        $modalContainer_offline.style.visibility = "hidden";
        $modal_offline.style.transform = "translateY(250%)";
        $modalContainer_online.style.opacity= "1";
        $modalContainer_online.style.visibility = "visible";
        $modal_online.style.transform = "translateY(0%)";
        setTimeout(() => {
            $modalContainer_online.style.opacity= "0";
            $modalContainer_online.style.visibility = "hidden";
            $modal_online.style.transform = "translateY(250%)";
        }, 2000)
    } else {
        $modalContainer_offline.style.opacity = "1";
        $modalContainer_offline.style.visibility = "visible";
        $modal_offline.style.transform = "translateY(0%)";
        $close_offline.addEventListener("click", function() {
            $modalContainer_offline.style.opacity = "0";
            $modalContainer_offline.style.visibility = "hidden";
            $modal_offline.style.transform = "translateY(250%)";
        });
        window.addEventListener("click", function(e) {
            // console.log(e.target); // Para saber a qué le estamos dando click div section en toda la ventana-window
            if(e.target === $modalContainer_offline){ // target detecta el evento, en este caso el click en el $modalContainer_offline
                $modalContainer_offline.style.opacity = "0";
                $modalContainer_offline.style.visibility = "hidden";
                $modal_offline.style.transform = "translateY(250%)";
            };
        });
    };
};
window.addEventListener("offline", () => networkStatus());
window.addEventListener("online", () => networkStatus());   