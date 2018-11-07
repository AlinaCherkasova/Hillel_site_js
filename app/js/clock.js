let timeBox = {};

function getTime(){
    let hours = document.querySelector('.clock__hours');
    let minutes = document.querySelector('.clock__minutes');
    let seconds = document.querySelector('.clock__seconds');

    let date = new Date();

    function setTime(num) {
        return (num < 10)
            ? '0' + num
            : num;
    }

    function changeTime(elem, newTime) {
        if (timeBox[newTime]!== date[newTime]()) {
            timeBox[newTime] = date[newTime]();
            elem.innerHTML = setTime(timeBox[newTime]) +
                `${(elem === seconds)
                    ? ''
                    : ' :'}`;
        }
    }

    changeTime(hours, 'getHours');
    changeTime(minutes, 'getMinutes');
    changeTime(seconds, 'getSeconds');

    setTimeout(getTime, 1000)
}

getTime();