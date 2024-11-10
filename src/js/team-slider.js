const arrowLeft = document.querySelector(".team-slider__left-arrow");
const arrowRight = document.querySelector(".team-slider__right-arrow");
const slides = document.querySelectorAll(".team-slider__student-slide");
const bottom = document.getElementById("team-slider-bottom");

let currentSlideIndex = 0;
const paginationLine = [];

function createPaginationLine() {
    const line = document.createElement("div");
    line.classList.add("team-slider__pagination-line");
    bottom.appendChild(line);
    paginationLine.push(line);
}

function addPagination() {
    slides.forEach(createPaginationLine);
    paginationLine[0].classList.add("team-slider__pagination-line--active");
    paginationLine.forEach((line, index) => {
        line.addEventListener("click", () => changeSlide(index));
    });
}

function addActiveClass() {
    paginationLine[currentSlideIndex].classList.add("team-slider__pagination-line--active");
}

function removeActiveClass() {
    paginationLine[currentSlideIndex].classList.remove("team-slider__pagination-line--active");
}

function showSlide() {
    slides[currentSlideIndex].classList.add("team-slider__student-slide--block");
}
function hideSlide() {
    slides[currentSlideIndex].classList.remove("team-slider__student-slide--block");
}

function changeSlide(slideIndex) {
    hideSlide();
    removeActiveClass();
    currentSlideIndex = slideIndex;
    addActiveClass();
    showSlide();
}

function nextSlide() {
    let newSlideIndex = currentSlideIndex + 1;
    if (newSlideIndex > slides.length - 1) {
        newSlideIndex = 0;
    }
    changeSlide(newSlideIndex);
}

function previousSlide() {
    let newSlideIndex = currentSlideIndex - 1;
    if (newSlideIndex < 0) {
        newSlideIndex = slides.length - 1;
    }
    changeSlide(newSlideIndex);
}
addPagination();
arrowRight.addEventListener("click", nextSlide);
arrowLeft.addEventListener("click", previousSlide);
