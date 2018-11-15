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
addDate();
