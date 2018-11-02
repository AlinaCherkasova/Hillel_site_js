function slider(){
    var images = ['img1.jpg', 'img2.jpg', 'img3.jpg' ];
    var slider = document.querySelector('#slideshow');
    var slideshow = document.querySelector(".slider");
    var img = slider.querySelector('img');

    var i = 0;
    slider.setInterval(function (){
        img.src = '/img/' + images[i];
        i++;
        if(i == images.length){
            i == 0;
        }
    }, 1000)
}
slider()

