function getDate(){
    let myDay = document.querySelector('.clock__day');
    let myMonth = document.querySelector('.clock__month');
    let myYear = document.querySelector('.clock__year');

    let date = new Date();
    let years = date.getFullYear();
    let months = date.getMonth();
    let days = date.getDate();

    function dateTime(day) {
        return (day < 10)
            ? '0' + day
            : day;
    }

    myDay.innerHTML = dateTime(days) + `.`;
    myMonth.innerHTML = dateTime(months)+ `.`;
    myYear.innerHTML = dateTime(years);

    setTimeout(getTime, 1000);
}
getDate();