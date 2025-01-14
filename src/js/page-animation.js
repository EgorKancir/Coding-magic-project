const checkPoint = document.querySelectorAll('.checkpoint');
const checkPointBox = document.querySelectorAll('.checkpoint__animation-box');
checkPointBox.forEach((element, index) => {
    if (index % 2 === 0) {
        element.classList.add('checkpoint--left');
    } else {
        element.classList.add('checkpoint--right');
    }
});

const pageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const checkPointBoxActive = entry.target.querySelectorAll('.checkpoint__animation-box');
            checkPointBoxActive.forEach(element => {
                element.classList.remove('checkpoint--left');
                element.classList.remove('checkpoint--right');
            });
            observer.unobserve(entry.target)
        }
    })
}, {
    rootMargin: '50px'
});

checkPoint.forEach(element => {
    pageObserver.observe(element);
})

const checkPointTitle = Array.from(document.querySelectorAll('.checkpoint--text'));
const checkPointLine = Array.from(document.querySelectorAll('.checkpoint--line'));
const checkPointElementArr = checkPointTitle.concat(checkPointLine);

checkPointElementArr.forEach(element => {
    element.style.transition = "all 1.5s ease-in-out";
    element.style.transform = "scale(0)";
});

const pageElementObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.transform = "scaleX(1)";
            observer.unobserve(entry.target)
        }
    })
}, {
    rootMargin: '50px'
});

checkPointElementArr.forEach(element => {
    pageElementObserver.observe(element);
})