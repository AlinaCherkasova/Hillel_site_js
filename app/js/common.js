function showTable(table) {
    display = document.querySelector('.table').style.display;
    if (display === 'none') {
        document.querySelector('.table').style.display = 'block';
    } else {
        document.querySelector('.table').style.display = 'none';
    }
}

function addTable() {
    var content = document.getElementById("table-container");
    var amountRows = document.getElementById("rows");
    var amountColumns = document.getElementById("columns");
    var rows = amountRows.value;
    var columns = amountColumns.value;
    var tr = "";
    var td = "";
    var firstTable = document.querySelector("table");

    table = document.createElement("table");
    table.setAttribute("border", "1px");
    table.setAttribute("cellspacing", "0px");
    table.setAttribute("cellpadding", "4px");

    for (var i = 0; i < rows; i++) {
        tr = document.createElement("tr");
        for (var j = 0; j < columns; j++) {
            td = document.createElement("td");
            text = document.createTextNode((i + 1) + "." + (j + 1));
            td.appendChild(text);
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

