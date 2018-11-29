function showTabs(){
    // let ul = document.querySelector('.sidebar__menu');
    // let tab;
    // let tabContent;
    //
    // window.onload = function() {
    //     tab = document.querySelectorAll('.sidebar__menu-links');
    //     tabContent = document.querySelectorAll('.content__tab');
    //     hideTabsContent(1);
    // };
    //
    //
    // ul.onclick= function (event) {
    //     let target = event.target;
    //     if (target.className === 'sidebar__menu-links') {
    //         for ( let i = 0; i < tab.length; i++) {
    //             if (target === tab[i]) {
    //                 showTabsContent(i);
    //                 break;
    //             }
    //         }
    //     }
    // };
    //
    // function hideTabsContent(a) {
    //     for (let i = a; i < tabContent.length; i++) {
    //         tabContent[i].classList.remove('show');
    //         tabContent[i].classList.add('hide');
    //     }
    // }
    //
    // function showTabsContent(b){
    //     if (tabContent[b].classList.contains('hide') ) {
    //         hideTabsContent(0);
    //         tabContent[b].classList.remove('hide');
    //         tabContent[b].classList.add('show');
    //     }
    // }

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
