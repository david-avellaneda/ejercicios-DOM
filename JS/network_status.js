export default function networkStatus(){
    const isOnline = () => {
        let $modalContainer_online = document.getElementById("container-online"),
            $modal_online = document.querySelectorAll(".modal-online")[0];
        $modal_online.style.transform = "translateY(-250%)";
        let $modalContainer_offline = document.getElementById("container-offline"),
            $modal_offline = document.querySelectorAll(".modal-offline")[0],
            $close_offline = document.querySelectorAll(".closeBtn-offline")[0];
        if(navigator.onLine) {
            document.body.style.setProperty("overflow-y", "hidden");
            $close_offline.classList.remove("animate__bounceIn");
            $modalContainer_offline.style.opacity = "0";
            $modalContainer_offline.style.visibility = "hidden";
            $modal_offline.style.transform = "translateY(250%)";
            $modalContainer_online.style.opacity= "1";
            $modalContainer_online.style.visibility = "visible";
            $modal_online.style.transform = "translateY(0%)";
            setTimeout(() => {
                document.body.style.setProperty("overflow-y", "visible");
                $modalContainer_online.style.opacity= "0";
                $modalContainer_online.style.visibility = "hidden";
                $modal_online.style.transform = "translateY(-250%)";
            }, 5000);
        } else {
            document.body.style.setProperty("overflow-y", "hidden");
            $modalContainer_offline.style.opacity = "1";
            $modalContainer_offline.style.visibility = "visible";
            $modal_offline.style.transform = "translateY(0%)";
            $close_offline.classList.toggle("animate__bounceIn");
            $close_offline.addEventListener("click", function() {
                document.body.style.setProperty("overflow-y", "visible");
                $close_offline.classList.toggle("animate__bounceIn");
                $modalContainer_offline.style.opacity = "0";
                $modalContainer_offline.style.visibility = "hidden";
                $modal_offline.style.transform = "translateY(250%)";
            });
            window.addEventListener("click", function(e) {
                // console.log(e.target); // Para saber a qué le estamos dando click div section en toda la ventana-window
                if(e.target === $modalContainer_offline){ // target detecta el evento, en este caso el click en el $modalContainer_offline
                    document.body.style.setProperty("overflow-y", "visible");
                    $close_offline.classList.toggle("animate__bounceIn");
                    $modalContainer_offline.style.opacity = "0";
                    $modalContainer_offline.style.visibility = "hidden";
                    $modal_offline.style.transform = "translateY(250%)";
                };
            });
        };
    };
    window.addEventListener("offline", () => isOnline());
    window.addEventListener("online", () => isOnline());   
};