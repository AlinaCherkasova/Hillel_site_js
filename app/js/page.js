// This code add header
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

// This code add footer
function addFooter(){
    let main = document.querySelector('main');
    let footer = document.createElement('footer');
    let footerContainer = document.createElement('div');
    let footerRightSide = document.createElement('div');

    footer.className = 'footer';
    footerContainer.className = 'footer__container';
    footerRightSide.className = 'footer__right-side';

    main.appendChild(footer);
    footer.appendChild(footerContainer);
    footerContainer.appendChild(footerRightSide);
}
addFooter();




/*
function addPage(){
    let main = document.querySelector('.main');
    let page = document.createElement('section');
    let aside = document.createElement('aside');
    let article = document.createElement('article');

    page.className = 'page';
    aside.className = 'sidebar';
    article.className = 'content';

    main.appendChild(page);
    page.appendChild(aside);
    page.appendChild(article);

    let sidebarMenu = document.createElement('ul');
    let sidebarMenuItems = document.createElement('li');
    let sidebarMenuLinks = document.createElement('a');

    sidebarMenu.className = 'sidebar__menu';
    sidebarMenuItems.className = 'sidebar__menu-items';
    sidebarMenuLinks.className = 'sidebar__menu-links';

    aside.appendChild(sidebarMenu);
    sidebarMenu.appendChild(sidebarMenuItems);
    sidebarMenuItems.appendChild(sidebarMenuLinks);
}
addPage();*/
