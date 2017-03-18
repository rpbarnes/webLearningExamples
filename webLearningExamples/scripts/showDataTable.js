
/* Grab the table element created in html, make a row, add cells to the row, fill the cells with html values */
var dataTable = document.getElementById('dataTable');
var row = dataTable.insertRow(-1);
var cell0 = row.insertCell(0);
var cell1 = row.insertCell(1);
var cell2 = row.insertCell(2);
cell0.innerHTML = 'JavaScript';
cell1.innerHTML = 'Wrote';
cell2.innerHTML = 'This';

var fileName = document.getElementById('input');



