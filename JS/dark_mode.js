export function darkMode(btn) {
    const bntDarkMode = document.getElementById(btn);
    bntDarkMode.addEventListener('click', () => {
        bntDarkMode.classList.toggle("active");
        document.body.classList.toggle("dark");
    });
};