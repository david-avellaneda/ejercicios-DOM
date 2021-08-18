export default function ji(){
    if(navigator.userAgent.match(/windows/i) || navigator.userAgent.match(/mac/i) || navigator.userAgent.match(/linux/i)){
        const $progressBar = document.getElementById("progressBar"),
            totalHeight = document.body.scrollHeight - window.innerHeight;
        $progressBar.classList.add("progressBar");
        window.onscroll = () => {
            let progressHeight = (window.pageYOffset / totalHeight) * 100;
            const $class_progressBar = document.querySelector(".progressBar");
            $class_progressBar.style.height = progressHeight + "%";
        }
    }
};