function addHeader(){
    let main = document.querySelector('main');
    let header = document.createElement('header');
    let headerContainer = document.createElement('div');
    let headerSearchWrap = document.createElement('div');
    let headerCityInput = document.createElement('input');

    header.className = 'header';
    headerContainer.className = 'header__container';
    headerSearchWrap.className = 'header__search-wrap';
    headerCityInput.className = 'header__search';

    main.appendChild(header);
    header.appendChild(headerContainer);
    headerContainer.appendChild(headerSearchWrap);
    headerSearchWrap.appendChild(headerCityInput);

    function searchCity() {
        let inputCity = document.querySelector('.header__search');
        function initialize() {
            let autocomplete = new google.maps.places.Autocomplete(inputCity);
        }
        google.maps.event.addDomListener(window, 'load', initialize);
    }
    searchCity();
}
addHeader();