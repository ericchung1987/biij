// Code for opening and closing the side navigator
let isOpen = false;

function openNav() {
    if (isOpen) {
        // close the side nav
        document.getElementById("sidebarList").style.left = "-250px";
        document.getElementById("sidebarTag").style.left = "-60px";
        // reduce padding after box close @ this does not work well in mobile - disabled - might wanna work on it more someday
        // document.getElementById("articlebox").style.paddingLeft = "0px";
        isOpen = !isOpen;
    } else {
        // open the side nav
        document.getElementById("sidebarList").style.left = "0px";
        document.getElementById("sidebarTag").style.left = "188.5px";
        // add padding after box open @ this does not work well in mobile - disabled 
        // document.getElementById("articlebox").style.paddingLeft = "0px";
        isOpen = !isOpen;
    }
}

function closeNav() {
    document.getElementById("sidebarList").style.left = "-250px";
    document.getElementById("sidebarTag").style.left = "-60px";
    // reduce padding after box close
    document.getElementById("articlebox").style.paddingLeft = "0px";
    isOpen = !isOpen;
}


// <!-- more script this one for sliding. Revised from midterm implementation -->
// Put under this category because any animation using link will be heavily used by sidebar.
    $(".sliding-link").click(function (e) {
        e.preventDefault();
        var aid = $(this).attr("href");
        $('html,body').animate({
            scrollTop: $(aid).offset().top
        }, 'slow');
    });

//enable drag scrolling in the sidebar 
// Code adapted from https://github.com/phuoc-ng/html-dom/blob/master/demo/drag-to-scroll/index.html
const ele = document.getElementById('sidebarList');
document.addEventListener('DOMContentLoaded', function() {
    const ele = document.getElementById('sidebarList');
    ele.style.cursor = 'grab';

    let pos = { top: 0, left: 0, x: 0, y: 0 };

    const mouseDownHandler = function(e) {
        ele.style.cursor = 'grabbing';
        ele.style.userSelect = 'none';

        pos = {
            left: ele.scrollLeft,
            top: ele.scrollTop,
            // Get the current mouse position
            x: e.clientX,
            y: e.clientY,
        };

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    };

    const mouseMoveHandler = function(e) {
        // How far the mouse has been moved
        const dx = e.clientX - pos.x;
        const dy = e.clientY - pos.y;

        // Scroll the element
        ele.scrollTop = pos.top - dy;
        ele.scrollLeft = pos.left - dx;
    };

    const mouseUpHandler = function() {
        ele.style.cursor = 'grab';
        ele.style.removeProperty('user-select');

        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    };

    // Attach the handler
    ele.addEventListener('mousedown', mouseDownHandler);
});

