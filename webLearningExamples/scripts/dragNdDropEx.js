
/* Grab the table element created in html, make a row, add cells to the row, fill the cells with html values */
var dataTable = document.getElementById('dataTable');
var row = dataTable.insertRow(-1);
var cell0 = row.insertCell(0);
var cell1 = row.insertCell(1);
var cell2 = row.insertCell(2);
cell0.innerHTML = 'JavaScript';
cell1.innerHTML = 'Wrote';
cell2.innerHTML = 'This';

/* Read file that was loaded into html, and make sure if it's changed that you are pulling the most recent file uploaded */
var inputElement = document.getElementById('input');
/* listen for a change to the input element by user */
inputElement.addEventListener('change',handleFiles, false) 

// pull file attributes & make sure browser has capability to read file e.g. html 5
function handleFiles() {
    var fileList = this.files;
    var file;
    for (var i = 0; i < fileList.length; i++) {
        // get file item
        file = fileList[i];
        alert(file.name);
    }
    // check for browser support 
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        // Read in file contents
        

    } else {
        alert('The file APIs are not supported');
    }
}




