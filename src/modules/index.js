import "../style.css"

let slideIndex = 1
showSlides(slideIndex)
navEventListener()

// next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n))
}

// navigation dot control
function currentSlide(n) {
  showSlides((slideIndex = n))
}

function showSlides(n) {
  const slides = document.getElementsByClassName("slide")
  const dots = document.getElementsByClassName("dot")
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "")
  }
  slides[slideIndex - 1].style.display = "block"
  dots[slideIndex - 1].className += " active"
}

// event listeners for next/previous controls
const prevBtn = document.getElementsByClassName("prev")[0]
prevBtn.addEventListener("click", () => plusSlides(-1))

const nextBtn = document.getElementsByClassName("next")[0]
nextBtn.addEventListener("click", () => plusSlides(1))

// add event listener to each navigation dot
function navEventListener() {
  const dots = document.getElementsByClassName("dot")
  for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", () => currentSlide(i + 1))
  }
}
