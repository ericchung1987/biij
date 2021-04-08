// This function is used in articles that has thumbnail figures.
// onclick will call the openImageViewer function passing it's ID to create the appropriate modal.
// This modal will be appended to the respective holder in the DOM.


function openImageViewer(elem_id) {
    // Create the appropriate elements.
    let image = document.createElement("img");
    let caption = document.createElement("p");
    // get the source and text
    let source = $('#' + elem_id + " img").attr('src');
    let caption_text = $('#' + elem_id + " figcaption").html();
    // set the src and classes as well as inner text for caption
    image.setAttribute("src", source);
    image.setAttribute("class", "d-block w-100 img-fluid rounded");
    caption.innerHTML = caption_text;
    // append the image and text to the respective holder
    document.getElementById("imageHolder").appendChild(image);
    document.getElementById("captionHolder").appendChild(caption);
    // show the modal
    $('#imagePopUp').modal('show');

}

// Remove the element when the user close the modal so that the next set can be loaded in.
// Without this, the previous image and caption will stack when you click on the next one.
$(document).ready(function () {
    $(".modal").on("hidden.bs.modal", function (e) {
        $(".modal img").remove();
        $(".modal p").remove();
    });
});

