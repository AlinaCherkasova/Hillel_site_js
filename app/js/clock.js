function getTime() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    function dateTime(day) {
        return (day < 10) ?
            '0' + day :
            day;
    }

    function time(seconds) {
        return (seconds < 10) ?
            '0' + seconds :
            seconds;
    }

    document.getElementById('date').innerHTML = `${dateTime(day)}.${dateTime(month)}.${dateTime(year)}`;
    document.getElementById('clock').innerHTML = `${time(hours)} : ${time(minutes)} : ${time(seconds)}`;
    setTimeout(getTime, 1000);
};
getTime();