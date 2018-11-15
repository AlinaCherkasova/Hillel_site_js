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
addTimer();