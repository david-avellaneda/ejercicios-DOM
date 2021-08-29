export default function lottery(btn, player) {
    const $getWinner = document.getElementById(btn)
    const getWinner = (selector) => {
        const $players = document.querySelectorAll(selector),
            random = Math.floor(Math.random() * $players.length),
            winner = $players[random];
        // console.log($players, random, winner);
        return `El ganador es: ${winner.textContent}`;
    };
    $getWinner.addEventListener('click', () => {
        const result = getWinner(player);
        alert(result);
    });
};
/* 
// Para obtener un ganador donde hayan comentarios y obtener el nombre del ganador
const getWinner = (selector) => {
    const $players = document.querySelectorAll(selector),
        random = Math.floor(Math.random() * $players.length),
        winner = $players[random];
    // console.log($players, random, winner);
    return `El ganador es: ${winner.textContent}`;
};
// getWinnerComment("ytd-comment-renderer #header-author #author-text span") // PARA YOUTUBE
// getWinnerComment(".l9j0dhe7 .q9uorilb .nc684nl6 .pq6dq46d")  // PARA FACEBOOK ABRIENDO UNA FOTO DONDE TENGA COMENTARIOS
*/