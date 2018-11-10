function showSize() {
    let timerOutId;
    let size = document.querySelector('.size');
    let docElem = document.documentElement;

    size.textContent = `${docElem.clientWidth} x ${docElem.clientHeight}`;
    window.addEventListener('resize', checkTimer);

    function checkTimer() {
        window.removeEventListener('resize', checkTimer);
        clearTimeout(timerOutId);
        timerOutId = setTimeout(putSize, 2000);
        window.addEventListener('resize', checkTimer);

        function putSize() {
            size.textContent = `${docElem.clientWidth} x ${docElem.clientHeight}`;
        }
    }
}
showSize();