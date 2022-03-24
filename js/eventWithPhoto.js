function reblur() {
    var image = document.getElementById("photo");
    image.src = "img/photo_blur.jpg";
}

function showPhoto() {
    var image = document.getElementById("photo");
    image.src = "img/photo.jpg";
    console.log("The picture: La creazione di Adamo, Michelangelo di Lodovico di Leonardo di Buonarroti Simoni")
}

window.onload = function() {
    var image = document.getElementById("photo");
    image.onmouseover = showPhoto;
    image.onmouseout = reblur;
}