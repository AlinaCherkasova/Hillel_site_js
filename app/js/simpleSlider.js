/*
function simpleSlider(){
    let main = document.querySelector('.content__container');
    let sliderContainer = document.createElement('div');
    let container = document.createElement('div');
    let thumbs = document.createElement('div');
    let imgWrapper = document.createElement('div');
    let img = document.createElement('img');

    sliderContainer.className = 'content__tab slider';
    sliderContainer.id = 'simple-slider';
    container.className = 'slider__container';
    thumbs.className = 'slider__thumbs';
    imgWrapper.className = 'slider__img-wrapper';
    img.className= 'slider__img';

    main.appendChild(sliderContainer);
    sliderContainer.appendChild(container);
    container.appendChild(thumbs);
    thumbs.appendChild(imgWrapper);
    imgWrapper.appendChild(img);

    document.querySelector('img').src = "#";

    function slider(){
        let i = 0;
        let images = [img1.jpg, img2.jpg, img3.jpg];
        let timer = 1000;
        function changeImages(){
            img.src = `img/${images[i]}`;
            if (i < images.length - 1){
                i++;
            } else {
                i = 0;
            }
            setTimeout('changeImages()', timer);
        }
    }
    slider();
}
simpleSlider();*/
let link16 = document.getElementById("simple-slider");
let images = ["https://picsum.photos/500/250?image=10",
    "https://picsum.photos/500/250?image=11",
    "https://picsum.photos/500/250?image=12",
    "https://picsum.photos/500/250?image=13",
    "https://picsum.photos/500/250?image=14",
    "https://picsum.photos/500/250?image=15",
    "https://picsum.photos/500/250?image=16",
    "https://picsum.photos/500/250?image=17"
];


class Slider {

    constructor(parent, images) {
        this.count = 1;
        this.position = 500;
        this.loop = true;
        this.parent = parent;
        this.sliderElement = document.createElement('div');
        this.sliderElement.classList.add('slider');
        this.list = document.createElement('ul');
        this.list.classList.add('slider__list');
        let img, item;

        for (let i = 0; i < images.length; i++) {
            item = document.createElement('li');
            img = document.createElement('img');
            img.classList.add('slider__img');
            img.alt = 'slide' + i;
            img.src = images[i];
            item.appendChild(img);
            this.list.appendChild(item);
        }

        this.sliderElement.appendChild(this.list);
        this.parent.appendChild(this.sliderElement);
        this.width = this.sliderElement.offsetWidth;
        this.listElements = this.sliderElement.querySelectorAll('li');
    }

    nextSlide() {
        if (this.position == -this.width * (this.listElements.length - this.count)) {
            this.position = 0;
            this.list.style.marginLeft = this.position + 'px';
        } else {
            this.position = Math.max(this.position - this.width * this.count, -this.width * (this.listElements.length - this.count));
            this.list.style.marginLeft = this.position + 'px';
        }
    }

    previusSlide() {
        if (this.position == 0) {
            this.position = -this.width * (this.listElements.length - this.count);
            this.list.style.marginLeft = this.position + 'px';
        } else {
            this.position = Math.min(this.position + this.width * this.count, 0)
            this.list.style.marginLeft = this.position + 'px';
        }
    }

    loopSlide() {
        if (this.loop) {
            this.nextSlide();
            setTimeout(()=>{this.loopSlide();}, 3000);
        }
    }
}

function showSlider() {
    block.innerHTML = '';
    content.innerHTML = '';
    let slider = new Slider(block, images);
    slider.loopSlide();
}

link16.addEventListener("click", showSlider);