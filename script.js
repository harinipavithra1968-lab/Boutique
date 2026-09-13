var close = document.getElementById("offerclose")
var offer = document.getElementById("offer")
var hide = document.getElementById("hide")
var menu = document.getElementById("menuicon")
var side = document.getElementById("sidenav")
var sideclose = document.getElementById("sideclose")
close.addEventListener("click", function () {
  offer.style.display = "none"
})
menu.addEventListener("click", function () {
  side.style.display = "flex"

})
sideclose.addEventListener("click", function () {
  side.style.display = "none"
})
var slide = document.getElementById("slide");

var images = [
  "./image/main.jpg",
  "./image/image2.jpg",
  "./image/image3.jpg",
  "./image/image4.jpg"
]

var index = 0

function nextimage() {
  index = index + 1

  if (index == images.length) {
    index = 0
  }

  slide.src = images[index]
}

var scroll = document.getElementById("scroll");

function frontimage() {
    if (scroll.scrollLeft < scroll.scrollWidth - scroll.clientWidth) {
        scroll.scrollLeft += scroll.clientWidth;
    }
}

function backimage() {
    if (scroll.scrollLeft > 0) {
        scroll.scrollLeft -= scroll.clientWidth;
    }
}
