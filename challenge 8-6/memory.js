img = ''
arrayofimages = ['images/image1.webp','images/image2.png','images/image3.jpeg','images/image4.png','images/image5.webp','images/image6.png','images/image7.png','images/image8.jpg','images/image9.png','images/image10.png','images/image1.webp','images/image2.png','images/image3.jpeg','images/image4.png','images/image5.webp','images/image6.png','images/image7.png','images/image8.jpg','images/image9.png','images/image10.png']

console.log(arrayofimages)

arrayofimages = shuffle(arrayofimages)
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
    }
    return array
}
console.log(arrayofimages)
for(let i = 0; i< 20; i ++){
    let button = document.createElement('button');
    let body = document.getElementsByTagName("body")[0]
    body.appendChild(button);
    button.id = i
    console.log(button);
    button.onclick = handle_click
}

function handle_click(e){
    console.dir(this)
    this.style.background = arrayofimages[0]
    this.style.backgroundSize = "100%"
}


