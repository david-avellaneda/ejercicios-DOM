const $skeleton = document.querySelectorAll(".skeleton");
const $contentVisibility = document.querySelectorAll(".contentVisibility");
export const renderCar = () => {
    function ji(){
        $skeleton.forEach((skeleton) => {
            skeleton.classList.remove("loading");
        });
        $contentVisibility.forEach((contentVisibility) => {
            contentVisibility.style.visibility = "visible";
        });
    }
    ji()
};