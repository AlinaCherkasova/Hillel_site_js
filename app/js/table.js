function showTable(table) {
    display = document.querySelector('.table').style.display;
    if (display === 'none') {
        document.querySelector('.table').style.display = 'block';
    } else {
        document.querySelector('.table').style.display = 'none';
    }
}

function addTable() {
    var content = document.querySelector('.table');
    var amountRows = document.getElementById('rows');
    var amountColumns = document.getElementById('columns');
    var rows = amountRows.value;
    var columns = amountColumns.value;
    var firstTable = document.querySelector('table');

    table = document.createElement('table');
    table.className = 'table__create';

    for (var i = 0; i < rows; i++) {
        var tr = document.createElement('tr');

        for (var j = 0; j < columns; j++) {
            var td = document.createElement('td');
            td.className = 'table__create-cols';
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    if (firstTable == null) {
        return content.appendChild(table);
    } else {
        var newTable = content.appendChild(table);
        return content.replaceChild(newTable, firstTable);
    }
}

