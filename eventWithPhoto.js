function reblur() {
    var image = document.getElementById("photo");
    image.src = "static/photo_blur.jpg";
}

function showPhoto() {
    var image = document.getElementById("photo");
    image.src = "static/photo.jpg";
}

window.onload = function() {
    var image = document.getElementById("photo");
    image.onmouseover = showPhoto;
    image.onmouseout = reblur;
}