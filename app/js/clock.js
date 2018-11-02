function getTime(){
    const HOURS = document.querySelector('#hours');
    const MINUTES = document.querySelector('#minutes');
    const SECONDS = document.querySelector('#seconds');

    var date = new Date();
    var getHours = date.getHours();
    var getMinutes = date.getMinutes();
    var getSeconds = date.getSeconds();

    function time(num) {
        return (num < 10)
            ? '0' + num
            : num;
    }

    HOURS.innerHTML = time(getHours);
    MINUTES.innerHTML = time(getMinutes);
    SECONDS.innerHTML = time(getSeconds);
    setTimeout(getTime, 1000);
};
getTime();