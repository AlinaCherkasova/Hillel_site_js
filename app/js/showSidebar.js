function showSidebar(){
    let sidebar = document.querySelector('.sidebar');

    let toggleButton = document.createElement('button');
    let toggleButtonSpan = document.createElement('span');

    toggleButton.className = ('sidebar__toggle-btn');
    toggleButtonSpan.className = ('sidebar__toggle-item');

    sidebar.appendChild(toggleButton);
    toggleButton.appendChild(toggleButtonSpan);

    toggleButton.addEventListener('click', toggleSidebar);

    function toggleSidebar(){
        document.querySelector('.sidebar').classList.toggle('active');
        document.querySelector('content').classList.toggle('active');
        document.querySelector('.sidebar__toggle-item').classList.toggle('toggle');
    }
}
showSidebar();