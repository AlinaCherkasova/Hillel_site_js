// This code adds a clock to header
function addClock(){
    let header = document.querySelector('.header__container');

    const CLOCK = document.createElement('div');
    const HOURS = document.createElement('span');
    const MINUTES = document.createElement('span');
    const SECONDS = document.createElement('span');

    CLOCK.className = 'clock';
    HOURS.className = 'clock__hours';
    MINUTES.className = 'clock__minutes';
    SECONDS.className = 'clock__seconds';

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

// This code adds a date to footer
function addDate(){
    let footer = document.querySelector('.footer__right-side');

    const CLOCK = document.createElement('div');
    const DAY = document.createElement('span');
    const MONTH = document.createElement('span');
    const YEARS = document.createElement('span');

    CLOCK.className = 'clock';
    DAY.className = 'clock__day';
    MONTH.className = 'clock__month';
    YEARS.className = 'clock__year';

    footer.appendChild(CLOCK);
    CLOCK.appendChild(DAY);
    CLOCK.appendChild(MONTH);
    CLOCK.appendChild(YEARS);

    function getDate(){
        let myDay = document.querySelector('.clock__day');
        let myMonth = document.querySelector('.clock__month');
        let myYear = document.querySelector('.clock__year');

        let date = new Date();
        let years = date.getFullYear();
        let months = date.getMonth();
        let days = date.getDate();

        function dateTime(value) {
            return (value < 10)
                ? '0' + value
                : value;
        }

        myDay.innerHTML = dateTime(days) + ` . `;
        myMonth.innerHTML = dateTime(months) + 1 + ` . `;
        myYear.innerHTML = dateTime(years);
    }
    getDate();
}

// This code adds a timer to footer
function addTimer(){
    let footer = document.querySelector('.footer__right-side');

    const TIMER = document.createElement('div');
    const HOURS = document.createElement('span');
    const MINUTES = document.createElement('span');
    const SECONDS = document.createElement('span');

    TIMER.className = 'timer';
    HOURS.className = 'timer__hours';
    MINUTES.className = 'timer__minutes';
    SECONDS.className = 'timer__seconds';

    footer.appendChild(TIMER);
    TIMER.appendChild(HOURS);
    TIMER.appendChild(MINUTES);
    TIMER.appendChild(SECONDS);

    function timer() {
        let hoursTimer = document.querySelector('.timer__hours');
        let minutesTimer = document.querySelector('.timer__minutes');
        let secondsTimer = document.querySelector('.timer__seconds');
        let hours = 0;
        let minutes = 0;
        let seconds = 0;
        let timerId;

        function setTime(value) {
            return (value < 10)
                ? '0' + value
                : value;
        }

        function changeTimer() {
            seconds += 1;
            if (seconds > 59) {
                seconds = seconds - 60;
                minutes += 1;
                minutesTimer.textContent = `${setTime(minutes)} :`;
            }
            secondsTimer.textContent = `${setTime(seconds)}`;
            if (minutes > 59) {
                minutes = minutes - 60;
                minutesTimer.textContent = `${setTime(minutes)} :`;
                hours += 1;
                hoursTimer.textContent = `${setTime(hours)} :`;
            }
            timerId = setTimeout(changeTimer, 1000)
        }

        function startTimer() {
            clearTimeout(timerId);
            timerId = setTimeout(changeTimer, 1000);
        }

        function stopTimer() {
            clearTimeout(timerId);
        }

        function resetTimer(event) {
            if (event.keyCode === 0x1B) {
                hours = 0;
                minutes = 0;
                seconds = 0;
                secondsTimer.textContent = `${setTime(seconds)}`;
                minutesTimer.textContent = `${setTime(minutes)} :`;
                hoursTimer.textContent = `${setTime(hours)} :`;
            }
        }

        secondsTimer.textContent = `${setTime(seconds)}`;
        minutesTimer.textContent = `${setTime(minutes)} :`;
        hoursTimer.textContent = `${setTime(hours)} :`;

        TIMER.addEventListener("mouseenter", stopTimer);
        TIMER.addEventListener("mouseleave", startTimer);
        window.addEventListener("keydown", resetTimer);
        changeTimer();
    }
    timer();
}
addClock();
addDate();
addTimer();