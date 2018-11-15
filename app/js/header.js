function addHeader(){
    let main = document.querySelector('main');
    let header = document.createElement('header');
    let headerContainer = document.createElement('div');
    let headerLogo = document.createElement('div');
    let headerLogoText = document.createElement('h1');

    header.className = 'header';
    headerContainer.className = 'header__container';
    headerLogo.className = 'header__logo';
    headerLogoText.className = 'header__logo_text';

    main.appendChild(header);
    header.appendChild(headerContainer);
    headerContainer.appendChild(headerLogo);
    headerLogo.appendChild(headerLogoText);

    headerLogoText.innerHTML = 'Hillel layout';

}
addHeader();