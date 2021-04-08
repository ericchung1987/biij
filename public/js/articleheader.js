// This function serve the title header that will be displayed in most article sections.


// Attaches EventListener to the elements.
$(document).ready(function () {
    $("#previousNavigateContainer").on("mouseenter", openPreviousNav);
    $("#previousNavigateContainer").on("mouseleave", closePreviousNav);
    $("#nextNavigateContainer").on("mouseenter", openNextNav);
    $("#nextNavigateContainer").on("mouseleave", closeNextNav);
});


function openPreviousNav() {
    document.getElementById("navigatePreviousBox").classList.add("left-on-navigation");
}

function closePreviousNav() {
    document.getElementById("navigatePreviousBox").classList.remove("left-on-navigation");
}


function openNextNav() {
    document.getElementById("navigateNextBox").classList.add("right-on-navigation");
}

function closeNextNav() {
    document.getElementById("navigateNextBox").classList.remove("right-on-navigation");
}