var images = ['images/image1.jpeg','images/image2.jpg'];
var el = document.getElementById('image');

function readyImages(){
    document.getElementById('image').innerHTML = "<img src=" + images[0] + " width='80' height='80'>";
}

function anotherImage(){
    document.getElementById('image2').innerHTML = "<img src=" + images[1] + " width='80' height='80'>";
}

el.addEventListener('click', anotherImage);