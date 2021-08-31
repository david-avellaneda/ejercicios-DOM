export default function slider(){
    const $rightBtn = document.getElementById('next'),
        $leftBtn = document.getElementById('previous'),
        $navigationBtns = document.querySelectorAll('#navBtns-container .nav-btn'),
        $images = document.querySelectorAll('.slider img');
    // console.log($images);
    let i = 0, // Current slide position
        slides = 3; // Total slides
    function moveRight() {
        document.getElementById('slider-image' + (i + 1)).classList.remove('active-image');
        i = (slides + i + 1) % slides;
        document.getElementById('slider-image' + (i + 1)).classList.add('active-image');
        positionBtn(i + 1);
    }
    $leftBtn.addEventListener('click', () => {
        document.getElementById('slider-image' + (i + 1)).classList.remove('active-image');
        i = (slides + i - 1) % slides;
        document.getElementById('slider-image' + (i + 1)).classList.add('active-image');
        positionBtn(i + 1);
        clearInterval(automaticSlider); // Cuando le de click detenemos el setInterval
        automaticSlider = setInterval(() => moveRight(), 8000); // Aquí cuando le de click y se vea una nueva imagen que vuelva a reiniciar el setInterval, por eso lo detenemos y lo volvemos a iniciar para que inicie desde 0 segundos y haga su ciclo normal hacia la derecha
    });
    $rightBtn.addEventListener('click', () => {
        moveRight();
        clearInterval(automaticSlider); // Cuando le de click detenemos el setInterval
        automaticSlider = setInterval(() => moveRight(), 8000); 
    });
    // console.log($navigationBtns);
    const positionBtn = (num) => {
        $navigationBtns.forEach((btn) => {
            btn.style.backgroundColor = 'transparent';
        });
        document.querySelector("#navBtns-container .nav-btn:nth-child(" + num + ")").style.backgroundColor = '#ffff';
    };
    const images = (index) => {
        $images.forEach(image => image.classList.remove('active-image'));
        i = index - 1;
        positionBtn(index);
    }
    $navigationBtns[0].addEventListener('click', () => {
        images(1);
        document.getElementById('slider-image' + 1).classList.add('active-image');
    });
    $navigationBtns[1].addEventListener('click', () => {
        images(2);
        document.getElementById('slider-image' + 2).classList.add('active-image');
    });
    $navigationBtns[2].addEventListener('click', () => {
        images(3);
        document.getElementById('slider-image' + 3).classList.add('active-image');
    });
    let automaticSlider = setInterval(() => {
        moveRight();
    }, 8000);
};