export default function slider(){
    const $containerSlider = document.getElementById('slider'),
        $rightBtn = document.getElementById('next'),
        $leftBtn = document.getElementById('previous'),
        $navigationBtns = document.querySelectorAll('#navBtns-container .nav-btn'),
        $images = document.querySelectorAll('.slider img');
    // console.log($images);
    let i = 0, // Current slide position
        slides = 3; // Total slides
    function moveRight() {
        $containerSlider.style.backgroundColor = background();
        document.getElementById('slider-image' + (i + 1)).classList.remove('active-image');
        i = (slides + i + 1) % slides;
        document.getElementById('slider-image' + (i + 1)).classList.add('active-image');
        positionBtn(i + 1);
        restarSetInterval();
    }
    const restarSetInterval = () =>{
        clearInterval(automaticSlider); // Cuando le de click detenemos el setInterval
        automaticSlider = setInterval(() => moveRight(), 8000); // Aquí cuando le de click y se vea una nueva imagen que vuelva a reiniciar el setInterval, por eso lo detenemos y lo volvemos a iniciar para que inicie desde 0 segundos y haga su ciclo normal hacia la derecha de los 8s
    }
    const positionBtn = (num) => {
        $navigationBtns.forEach((btn) => {
            btn.style.backgroundColor = 'transparent';
        });
        $containerSlider.style.backgroundColor = background();
        document.querySelector("#navBtns-container .nav-btn:nth-child(" + num + ")").style.backgroundColor = '#ffff';
        // console.log($navigationBtns);
    };
    const images = (index) => {
        $images.forEach(image => {
            image.classList.remove('active-image');
        });
        i = index - 1;
        positionBtn(index);
    }
    const background = (color) => {
        color = (Math.random() * 0xffffff * 1000000).toString(16);
        return `#${color.slice(0, 6)}`;
    }
    // console.log(background());
    $leftBtn.addEventListener('click', () => {
        $containerSlider.style.backgroundColor = background();
        document.getElementById('slider-image' + (i + 1)).classList.remove('active-image');
        i = (slides + i - 1) % slides;
        document.getElementById('slider-image' + (i + 1)).classList.add('active-image');
        positionBtn(i + 1);
        restarSetInterval();
    });
    $rightBtn.addEventListener('click', () => {
        moveRight();
    });
    $navigationBtns[0].addEventListener('click', () => {
        images(1);
        restarSetInterval();
        document.getElementById('slider-image' + 1).classList.add('active-image');
    });
    $navigationBtns[1].addEventListener('click', () => {
        images(2);
        restarSetInterval();
        document.getElementById('slider-image' + 2).classList.add('active-image');
    });
    $navigationBtns[2].addEventListener('click', () => {
        images(3);
        restarSetInterval();
        document.getElementById('slider-image' + 3).classList.add('active-image');
    });
    let automaticSlider = setInterval(() => {
        moveRight();
    }, 8000);
};