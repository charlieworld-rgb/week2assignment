const galleryBox = document.getElementById("Gallerybox")
const img = document.getElementById("img")
let index = 0

const images=[
    {
    src:"https://www.shutterstock.com/image-photo/beautiful-lanscape-riviera-coast-turquiose-260nw-2305901295.jpg",
    alt: "seaside town"
    },
    {
    src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIHxr5wn5AyGz2FyTKLCeC8jD8UIpX3ROxvg&s",
    alt:"snow mountain range"
    },
    {
    src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnStllsnwq_aOXPouIrUhgA9mZZg8pkC8YMg&s",
    alt:"wooden cart wheel"
    }
]

img.src = images[index].src
img.alt = images[index].alt

const button = document.getElementById("backBtn")
backBtn.addEventListener("click", picMove)

function picMove() {
   if (index === 0) {
    index = 3
   }

    index -- 
    img.src = images[index].src
    img.alt = images[index].alt
}

const botton = document.getElementById("pic")
pic.addEventListener("click", pictureBig)

function pictureBig() {
   
    if (index === 2){
        index = -1
    }

    index = index + 1
    img.src = images[index].src
    img.alt = images[index].alt
}