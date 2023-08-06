const furniture = document.querySelector('.furniture-designs');
const imgs = furniture.querySelectorAll('.work-gallery');
// const decksand = document.querySelector('.decks-perg-designs');
// const imgs2 = decksand.querySelectorAll('.gallery-works'); 
const next = document.getElementById('next');
const prev = document.getElementById('prev');


let currentImage = 0

function slideNext() {
    currentImage += 1
    console.log(imgs[currentImage])
}

function slidePrev() {
    currentImage -= 1
    imgs[currentImage]
}

next.addEventListener('click', () => {
    slideNext()
    console.log("one")
    // e.preventDefault();
});


