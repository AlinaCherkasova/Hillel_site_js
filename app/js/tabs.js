function showTabs(){
    let links = document.querySelectorAll('.sidebar__menu-items');
    let content = document.querySelectorAll('.content__tab');
    for (let i = 0; i < links.length; i++) {
        ( function (i) {
            let link = links[i];
            link.onclick = function () {
                for (let j = 0; j < content.length; j++) {
                    let display = window.getComputedStyle(content[j]).display;
                    if (display === "block") {
                        content[j].style.display = "none";
                    }
                    content[i].style.display = "block";
                }
            }
        })(i);
    }
}
showTabs();


/*function tabs(){
    const element = document.querySelector('.sidebar__menu');
    element.addEventListener('click', onTabClick);

    function onTabClick(event) {
        let activeTabs = document.querySelectorAll('.active');

        /!*for(let i = 0; i < activeTabs.length; i++){
            activeTabs[i].className = activeTabs[i].className.replace('active', '');
        };*!/

        activeTabs.forEach(function(tab){
            tab.className = tab.className.replace('active', '');
        });

        event.target.parentElement.className += 'active';
        document.getElementById(event.target.href.split('#')[i]).className += 'active';
    }
}
tabs();*/
