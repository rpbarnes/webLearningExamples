
// This is a little messy mix of jquery and javascript...
// For some reason I can't use javascript to set tr properties...

function handleDragStart(e) {
    $(this).closest("tr").css('opacity',"0.4"); //once something is dragged make it a little opaque
    // keep track of what the user grabbed
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML); // pull the html that produced what the user grabbed.
}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault;
    }
    e.dataTransfer.dropEffect = "move"; // see the selection on data object
    return false;
}

function handleDragEnter(e) {
    // this is changing the current hover target.
    // this.classList.add('over');
    $(this).closest("tr").css('border','2px dashed #000');
}

function handleDragLeave(e) {
    // when you're not over a target.
    // this.classList.remove('over');
    $(this).closest("tr").css('border','0px dashed #000');
}

function handleDrop(e,ui) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    // don't do anything if we drop the item back into where it came from
    //if (this != dragSrcEl){
    //    dragSrcEl.innerHTML = e.dataTransfer.getData('text/html');
    //}
    $('placeholder').remove();
    row = ui.draggable;
    $(this).append(row);

    return false
}

function handleDragEnd(e) {
    for (var i=0; i<rows.length; i++)
    {
        rows[i].style.border('0');
    }
}


// set a global variable so we can keep track of what the user grabbed
var dragSrcEl = null;

var table = document.getElementById("table");
var rows = table.getElementsByTagName("tr");
for (var i=0; i<rows.length; i++)
{
    rows[i].addEventListener('dragstart',handleDragStart,false);
    rows[i].addEventListener('dragenter',handleDragEnter,false);
    rows[i].addEventListener('dragover',handleDragOver,false);
    rows[i].addEventListener('dragleave',handleDragLeave,false);

}


