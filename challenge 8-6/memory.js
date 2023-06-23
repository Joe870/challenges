images = ['image1.webp','image2.png','image3.jpeg','image4.png','image5.webp','image6.png','image7.png','image8.jpg','image9.png','image10.png']
images = images.concat(images)

bgImage = 'background.png'
opened = []


// arrayofimages = ['images/image1.webp',id=1,'images/image2.png',id=2,'images/image3.jpeg',id=3,'images/image4.png',id=4,'images/image5.webp',id=5,'images/image6.png',id=6,'images/image7.png',id=7,'images/image8.jpg',id=8,'images/image9.png',id=9,'images/image10.png',id=10,'images/image1.webp',id=1,'images/image2.png', id=2,'images/image3.jpeg',id=3,'images/image4.png',id=4,'images/image5.webp',id=5,'images/image6.png',id=6,'images/image7.png',id=7,'images/image8.jpg',id=8,'images/image9.png',id=9,'images/image10.png',id=10]

console.log(images)

function hide(opened){
    opened[0].src = 'images/' + bgImage
    opened[1].src = 'images/' + bgImage
    opened = []
}

function clicked(event){
    if (opened.length == 2){
        return;
    }
    this.src = 'images/' + images[this.nr];
    opened.push(this)
    console.dir(opened)
    if (opened.length == 2){
        setTimeout(hide,1000)
    }
    console.dir(opened)
}

for (let imageNr in images){
    let img = document.createElement('img');
    img.src = 'images/' + bgImage;
    img.nr = imageNr;
    img.onclick = clicked;
    playboard.appendChild(img);
}
