images = ['images/image1.webp','images/image2.png','images/image3.jpeg','images/image4.png'];
nummer=0;
image = document.getElementById("image");
image.src = images[0]
next = document.getElementById("next");
previous = document.getElementById("previous");
next.onclick = function() {
    if(nummer == 3){
        nummer = 0
    } else {
        nummer += 1;
    }
    image.src = images[nummer]
}
previous.onclick = function(){
    if(nummer == 0){
        nummer = 3
    } else {
        nummer -= 1;
    }
    image.src=images[nummer]
}
