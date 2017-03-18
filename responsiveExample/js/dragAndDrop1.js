//$(function () {
//    $("#table tbody tr").draggable({
//        appendTo:"body",
//        helper:"clone"
//    });
//
//    $("#table tbody").droppable({
//        activeClass:"ui-state-default",
//        hoverClass:"ui-state-hover",
//        accept:":not(.ui-sortable-helper)",
//        drop:function (event,ui) {
//            $('placeholder').remove();
//            row = ui.draggable;
//            $(this).append(row);
//        }
//    })
//})

$(".grab").mousedown(function (e) {
    var tr = $(e.target).closest("tr"), si = tr.index(), sy = e.pageY, b = $(document.body), drag;
    if (si == 0) return;
    b.addClass('grabCusor').css('userSelect','none');
    tr.addClass('grabbed');
    function move (e) {
        if (!drag && Math.abs(e.pageY - sy) < 10) return;
        drag = true;
        tr.siblings().each(function () {
            var s = $(this), i = s.index(), y = s.offset().top;
            if (i > 0 && e.pageY >= y && e.pageY < y + s.outerHeight()) {
                if (i < tr.index()) 
                    s.insertAfter(tr);
                else 
                    s.insertBefore(tr);
                return false
            }
        });
    }
    function up (e) {
        if (drag && si != tr.index()) {
            drag = false;
            alert("moved!");
        }
        $(document).unbind("mousemove",move).unbind("mouseup",up);
        b.removeClass("grabCursor").css("userSelect","none");
        tr.removeClass("grabbed")
    }
    $(document).mousemove(move).mouseup(up);
});





