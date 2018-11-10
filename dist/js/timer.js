function timer() {
    let container = document.querySelector('.footer__right-side');
    let hoursTimer = document.querySelector('.timer__hours');
    let minutesTimer = document.querySelector('.timer__minutes');
    let secondsTimer = document.querySelector('.timer__seconds');
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let timerId;

    function setTime(num) {
        return (num < 10)
            ? '0' + num
            : num;
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

    container.addEventListener("mouseenter", stopTimer);
    container.addEventListener("mouseleave", startTimer);
    window.addEventListener("keydown", resetTimer);
    changeTimer();
}
timer();
