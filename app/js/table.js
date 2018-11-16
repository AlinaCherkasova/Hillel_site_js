function addTable(){
    let main = document.querySelector('.content__container');
    let container = document.createElement('div');
    let rows = document.createElement('input');
    let cols = document.createElement('input');
    let button = document.createElement('button');

    container.className = 'table content__tab';
    container.id = 'table-container';
    rows.className = 'table__rows';
    cols.className = 'table__cols';
    button.className = 'table__button';

    rows.setAttribute('placeholder', 'Строки');
    cols.setAttribute('placeholder', 'Столбцы');
    rows.setAttribute('type', 'number');
    cols.setAttribute('type', 'number');

    button.innerText = 'CREATE';

    main.appendChild(container);
    container.appendChild(rows);
    container.appendChild(cols);
    container.appendChild(button);

function createTable() {
    let content = document.querySelector('.table');
    let rows = document.querySelector('.table__rows').value;
    let columns = document.querySelector('.table__cols').value;
    let firstTable = document.querySelector('table');

    let table = document.createElement('table');
    table.className = 'table__create';

    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');

        for (let j = 0; j < columns; j++) {
            let td = document.createElement('td');
            td.className = 'table__create-cols';
            tr.appendChild(td);
            td.title = `${i + 1}:${j + 1}`;
        }
        table.appendChild(tr);
    }
    if (firstTable == null) {
        return content.appendChild(table);
    } else {
        let newTable = content.appendChild(table);
        return content.replaceChild(newTable, firstTable);
    }
}
    button.addEventListener('click', createTable);

}
addTable();

