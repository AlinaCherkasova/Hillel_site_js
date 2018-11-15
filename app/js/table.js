 function addTable() {
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
    addTable();

