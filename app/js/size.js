function addSizeOfPage(){
    const SIZE = document.createElement('div');
    SIZE.className = 'size';

    let footer = document.querySelector('.footer__container');
    footer.appendChild(SIZE);

    function showSizeOfPage() {
        let timerOutId;
        let size = document.querySelector('.size');
        let elem = document.documentElement;

        size.textContent = `${elem.clientWidth} x ${elem.clientHeight}`;
        window.addEventListener('resize', checkTimer);

        function checkTimer() {
            window.removeEventListener('resize', checkTimer);
            clearTimeout(timerOutId);
            timerOutId = setTimeout(setSize, 2000);
            window.addEventListener('resize', checkTimer);

            function setSize() {
                size.textContent = `${elem.clientWidth} x ${elem.clientHeight}`;
            }
        }
    }
    showSizeOfPage();
}
addSizeOfPage();
