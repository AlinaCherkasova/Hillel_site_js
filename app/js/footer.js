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