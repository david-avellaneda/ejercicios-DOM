export const renderCar = () => {
    const $skeleton = document.querySelectorAll(".skeleton"),
    $contentVisibility = document.querySelectorAll(".contentVisibility"),
    $cancelInteractions = document.getElementById("cancelInteractions");
    $skeleton.forEach((e) => {
        e.classList.remove("loading");
    });
    $contentVisibility.forEach((e) => {
        e.style.visibility = "visible";
    });
    $cancelInteractions.classList.remove("cancelInteractions-skeleton");
};