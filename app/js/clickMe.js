function clickMeUniversal(){
    let myButton = document.querySelector('.my-button');

    function clickMe(event){
        this.style.color = 'red';
        console.log(event);
    }
    myButton.addEventListener('click', clickMe);
}
clickMeUniversal();