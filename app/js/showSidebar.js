function addSidebar(){
    let mainContent = document.querySelector('.main-content');
    let aside = document.createElement('aside');
    let toggleButton = document.createElement('button');
    let toggleButtonSpan = document.createElement('span');
    let sidebarMenu = document.createElement('ul');

    aside.className = 'sidebar';
    aside.id = 'toggleSidebar';
    toggleButton.className = 'sidebar__toggle-btn';
    toggleButtonSpan.className = 'sidebar__toggle-item';
    sidebarMenu.className = 'sidebar__menu';

    aside.appendChild(sidebarMenu);
    mainContent.appendChild(aside);
    aside.appendChild(toggleButton);
    toggleButton.appendChild(toggleButtonSpan);

    toggleButton.addEventListener('click', showToggleSidebar);

    function showToggleSidebar(){
        document.querySelector('.sidebar').classList.toggle('active');
        document.querySelector('.content').classList.toggle('active');
        document.querySelector('.sidebar__toggle-item').classList.toggle('toggle');
    }

    function createSidebarList(){
        let numbers = [0, 1, 2, 3, 4];
        let value = ['#table-container', '#simple-slider', '#click-me', '#students-table', '#promises'];
        let tabText = ['Table', 'Slider', 'ClickMe', 'Student\'s table', 'Student\'s tableeeeee'];
        let desiredLink = value;
        let menu = document.querySelector('.sidebar__menu');
        numbers.forEach((i) =>{
            let newLi = document.createElement('li');
            newLi.className = 'sidebar__menu-items';
            let newA = document.createElement('a');
            newA.className = 'sidebar__menu-links';
            newA.setAttribute('href', desiredLink[i]);
            newA.innerHTML = tabText[i];
            menu.appendChild(newLi);
            newLi.appendChild(newA);
        });

    }
    createSidebarList();

}
addSidebar();

