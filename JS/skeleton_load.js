export const renderCar = () => {
    const $skeleton = document.querySelectorAll(".skeleton"),
    $contentVisibility = document.querySelectorAll(".contentVisibility"),
    $cancelInteractions = document.getElementById("cancelInteractions");
    $skeleton.forEach((skeleton) => {
        skeleton.classList.remove("loading");
    });
    $contentVisibility.forEach((contentVisibility) => {
        contentVisibility.style.visibility = "visible";
    });
    $cancelInteractions.classList.remove("cancelInteractions-skeleton");
};