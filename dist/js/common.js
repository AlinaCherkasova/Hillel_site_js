function showSlider() {
    let display = document.querySelector('#circle-slider').style.display;
    if (display === 'none') {
        document.querySelector('#circle-slider').style.display = 'block';
    } else {
        document.querySelector('#circle-slider').style.display = 'none';
    }
}

function sliderWithArrows(){
    let elemCount = 3;
    let elemWidth = 660;
    let current = 1;
    let move = 0;

    let nextElem = document.querySelector('.next');
    let prevElem = document.querySelector('.prev');
    let sliderThumb = document.querySelector('.slider__thumbs');

    nextElem.addEventListener('click', nextImage);
    prevElem.addEventListener('click', prevImage);

    function nextImage(){
        if (current < elemCount){
            move += elemWidth;
            sliderThumb.style.transform = 'translateX(-'+ move +'px)';
            current++;
        } else {
            current = 1;
            move = 0;
            sliderThumb.style.transform = 'translateX(-'+ move +'px)';
            return sliderThumb.style.transform = 'translateX( 0px)';
        }
    }

    function prevImage(){
        if (current > 0){
            move -= elemWidth;
            sliderThumb.style.transform = 'translateX(-'+ move +'px)';
            current--;
        }
        else {
            current = 2;
            move = 1980;
            sliderThumb.style.transform = 'translateX(-'+ move +'px)';
            return sliderThumb.style.transform = 'translateX( 0px)';
        }
    }

    function circleSlider(){
        setInterval( nextImage, 3000);
    }
    circleSlider();
}
sliderWithArrows();