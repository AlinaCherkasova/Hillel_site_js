//toggle
function toggleSidebar(){
	document.getElementById('toggleSidebar').classList.toggle('active');
    document.getElementById('content').classList.toggle('active');
	document.getElementById('toggleSpan').classList.toggle('toggle');
};

//clock
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

//date
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
    // document.getElementById('date').innerHTML = `${dateTime(day)}.${dateTime(month)}.${dateTime(year)}`;
    setTimeout(getTime, 1000);
};
getDate();
