function getDate(){
    const DAY = document.querySelector('#day');
    const MONTH = document.querySelector('#month');
    const YEAR = document.querySelector('#year');

    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();

    function dateTime(day) {
        return (day < 10)
            ? '0' + day
            : day;
    }

    DAY.innerHTML = dateTime(day);
    MONTH.innerHTML = dateTime(month);
    YEAR.innerHTML = dateTime(year);
    setTimeout(getTime, 1000);
};
getDate();