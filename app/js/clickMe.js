function addClickMe() {
    let main = document.querySelector('.content__container');
    let container = document.createElement('div');
    let button = document.createElement('input');

    container.className = 'click-me content__tab';
    container.id = 'click-me';
    button.className = 'my-button';
    button.id = 'my_button';

    button.setAttribute('type', 'submit');
    button.setAttribute('value', 'my_button');

    main.appendChild(container);
    container.appendChild(button);

    function clickMeUniversal(){
        let myButton = document.querySelector('#my-button');

        function clickMe(event){
            event.target.style.color = 'red';
            console.log(event);
        }
        myButton.addEventListener('click', clickMe);
    }
    clickMeUniversal();
}
addClickMe();
