function clickMeUniversal(){
    let myButton = document.querySelector('.my-button');

    function clickMe(event){
        myButton.style.color = 'red';
        console.log(event);
    }

    myButton.addEventListener('click', clickMe);
};
clickMeUniversal();