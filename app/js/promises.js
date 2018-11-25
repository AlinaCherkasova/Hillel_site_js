function addPromises(){
    let link19 = document.getElementById("promises");
    let head = document.createElement('div');
    let image = document.createElement('div');
    let article = document.createElement('div');
    let row = document.createElement('div');
    let text = document.createElement('div');

    image.className = 'image';
    head.className = 'head';
    head.innerHTML = `<h2>Head</h2>`;
    text.className = 'text';
    text.innerHTML = `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eos blanditiis dolores. Porro quas aliquam quasi officiis cumque similique suscipit, ea voluptas, aspernatur quae atque explicabo, numquam pariatur magnam rem?</p>`;
    article.className = 'article';
    article.appendChild(image);
    article.appendChild(text);
    row.className = 'row';
    row.appendChild(head);
    row.appendChild(article);

    function showPromiseElements() {
        content.innerHTML = '';
        block.innerHTML = `
        <div class="row">
            <div class="progress">
                <div class="progress__line"></div>
            </div>
        </div>
        <div class="row">
            <div class="buttons">
                <button id="first">example #1</button>
                <button id="second">example #2</button>
            </div>
        </div>`;

        for (let i = 0; i < 3; i++) {
            content.appendChild(row.cloneNode(true));
        }

        let progress = document.querySelector(".progress__line");
        let heads = document.getElementsByClassName("head");
        let images = document.getElementsByClassName("image");
        let texts = document.getElementsByClassName("article");
        let buttons = document.querySelector('.buttons');
        let promise = new Promise((resolve, reject) => {
            resolve(buttons.addEventListener('click', load))
        });

        function load(event) {
            if (event.target.id == 'first') {
                queue(true);
            } else if (event.target.id == 'second') {
                queue(false);
            }

            progress.style.width = '0px';
            progress.addEventListener('transitionend', close);

        }

        function hideElement(element) {
            element.style.width = "0px";
            element.style.padding = "0px";
            element.style.height = "0px";
            element.addEventListener('transitionend', (event) => {
                event.stopPropagation();
                element.style.border = '0px';
            })

        }

        function hideElements(elements) {
            for (let i = 0; i < elements.length; i++) {
                hideElement(elements[i]);
            }
        }

        function queue(toggle) {
            let allElements = (toggle)
                ? 1
                : texts.length;

            for (let i = 0; i < allElements; i++) {
                promise.then(() => {
                    Promise.resolve(((i == 0) ? progress : heads[i-1]).addEventListener('transitionend', (event) => {
                        event.stopPropagation()
                        if (!toggle) {
                            hideElement(images[i]);
                        } else {
                            hideElements(images);
                        }
                    }))
                }).then(() => {
                    Promise.resolve(images[i].addEventListener('transitionend', (event) => {
                        event.stopPropagation()
                        if (!toggle) {
                            hideElement(texts[i]);
                        } else {
                            hideElements(texts);
                        }

                    }))
                }).then(() => {
                    Promise.resolve(texts[i].addEventListener('transitionend', (event) => {
                        event.stopPropagation()
                        if (!toggle) {
                            hideElement(heads[i]);
                        } else {
                            hideElements(heads);
                        }
                    }))
                })
            }
        }

    }

    link19.addEventListener("click", showPromiseElements);
}

addPromises();