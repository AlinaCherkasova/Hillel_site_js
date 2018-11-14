function setClock(){
    let header = document.querySelector('.header__container');

    const CLOCK = document.createElement('div');
    const HOURS = document.createElement('span');
    const MINUTES = document.createElement('span');
    const SECONDS = document.createElement('span');

    CLOCK.className = ('clock');
    HOURS.className = ('clock__hours');
    MINUTES.className = ('clock__minutes');
    SECONDS.className = ('clock__seconds');

    header.appendChild(CLOCK);
    CLOCK.appendChild(HOURS);
    CLOCK.appendChild(MINUTES);
    CLOCK.appendChild(SECONDS);

    let timeBox = {};

    function getTime(){
        let hours = document.querySelector('.clock__hours');
        let minutes = document.querySelector('.clock__minutes');
        let seconds = document.querySelector('.clock__seconds');

        let date = new Date();

        function setTime(value) {
            return (value < 10)
                ? '0' + value
                : value;
        }

        function changeTime(elem, newTime) {
            if (timeBox[newTime]!== date[newTime]()) {
                timeBox[newTime] = date[newTime]();
                elem.innerHTML = setTime(timeBox[newTime]) +
                    `${(elem === seconds)
                        ? ''
                        : ' : '}`;
            }
        }

        changeTime(hours, 'getHours');
        changeTime(minutes, 'getMinutes');
        changeTime(seconds, 'getSeconds');

        setTimeout(getTime, 1000);
    }
    getTime();
}
setClock();