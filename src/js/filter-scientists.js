const scientistsParent = document.querySelector('.filter-scientists__image-group');
const scientistsImageArr = Array.from(scientistsParent.children);
const mainBtnGroup = document.querySelectorAll('.filter-scientists__filter-option-group');
const leftBtnParent = document.querySelector('.filter-scientists__filter-option-left-section');
const leftBtnArr = Array.from(leftBtnParent.children);
const rightBtnParent = document.querySelector('.filter-scientists__filter-option-right-section');
const rightBtnArr = Array.from(rightBtnParent.children);
const bottomBtn = document.querySelector('.filter-scientists__filter-option-btn-bottom');
const scientists = [
    {
        name: "Albert",
        surname: "Einstein",
        born: 1879,
        dead: 1955,
        id: 1
    },
    {
        name: "Isaac",
        surname: "Newton",
        born: 1643,
        dead: 1727,
        id: 2
    },
    {
        name: "Galileo",
        surname: "Galilei",
        born: 1564,
        dead: 1642,
        id: 3
    },
    {
        name: "Marie",
        surname: "Curie",
        born: 1867,
        dead: 1934,
        id: 4
    },
    {
        name: "Johannes",
        surname: "Kepler",
        born: 1571,
        dead: 1630,
        id: 5
    },
    {
        name: "Nicolaus",
        surname: "Copernicus",
        born: 1473,
        dead: 1543,
        id: 6
    },
    {
        name: "Max",
        surname: "Planck",
        born: 1858,
        dead: 1947,
        id: 7
    },
    {
        name: "Katherine",
        surname: "Blodgett",
        born: 1898,
        dead: 1979,
        id: 8
    },
    {
        name: "Ada",
        surname: "Lovelace",
        born: 1815,
        dead: 1852,
        id: 9
    },
    {
        name: "Sarah E.",
        surname: "Goode",
        born: 1855,
        dead: 1905,
        id: 10
    },
    {
        name: "Lise",
        surname: "Meitner",
        born: 1878,
        dead: 1968,
        id: 11
    },
    {
        name: "Hanna",
        surname: "Hammarström",
        born: 1829,
        dead: 1909,
        id: 12
    }
];
function selectScientist(id) {
    let newId = id - 1;
    scientistsImageArr[newId].classList.add('filter-scientists__active-scientist');
}
function redSelectScientist(id) {
    let newId = id - 1;
    scientistsImageArr[newId].classList.add('filter-scientists__active-scientist-red');
}
function removeScientist(id) {
    let newId = id - 1;
    scientistsImageArr[newId].classList.add('filter-scientists__remove-scientist');
}
function removeClass() {
    scientistsImageArr.forEach(elemen => {
        for (let i = 0; i < scientistsImageArr.length; i++) {
            elemen.classList.remove(`filter-scientists__image--${i+1}`);   
        }
    }) 
    for (let i = 0; i < scientistsImageArr.length; i++) {
        scientistsImageArr[i].classList.add(`filter-scientists__image--${i+1}`)
    }
    scientistsImageArr.forEach(img => {
        img.classList.remove('filter-scientists__active-scientist');
        img.classList.remove('filter-scientists__active-scientist-red');
        img.classList.remove('filter-scientists__image--default');
        img.classList.remove('filter-scientists__image--after');
        img.classList.remove('filter-scientists__remove-scientist');
    });
    leftBtnArr.forEach(btn => {
        btn.classList.remove('filter-scientists__active-btn');
    });
    rightBtnArr.forEach(btn => {
        btn.classList.remove('filter-scientists__active-btn');
    });
    bottomBtn.classList.remove('filter-scientists__active-btn');
}
// 1
function centuryBirth(arr, startCentury, endCentry) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].born > startCentury && arr[i].born < endCentry) {
            selectScientist(arr[i].id);
        } else {
            continue
        }
    }
}
leftBtnArr[0].addEventListener('click', () => {
    removeClass();
    centuryBirth(scientists, 1801, 1900);
    leftBtnArr[0].classList.add('filter-scientists__active-btn');
});
// 1  
// 2
const copyScientistsArr = scientists.slice();
const sortedScientists = copyScientistsArr.sort((a, b) => {
    if (a.surname < b.surname) return -1;
    if (a.surname > b.surname) return 1;
    return 0;
});
const positionScientistsArr = [];
for (let i = 0; i < sortedScientists.length; i++) {
    positionScientistsArr.push(sortedScientists[i].id);
}
function abcScientist(positionArr, imageArr) {
    for (let i = 0; i < positionArr.length; i++) {
        imageArr[i].classList.remove(`filter-scientists__image--${i+1}`);
        imageArr[i].classList.add(`filter-scientists__image--${positionArr[i]}`)
        imageArr[i].classList.add('filter-scientists__image--default');
    }
}
leftBtnArr[1].addEventListener('click', () => {
    removeClass();
    abcScientist(positionScientistsArr, scientistsImageArr);
    leftBtnArr[1].classList.add('filter-scientists__active-btn');
})
// 3
// 4
const severalYearsArr = [];
scientists.forEach(scientist => {
    let bornScientist = scientist.born;
    let deadScientist = scientist.dead;
    let scientistAgeObj = {
        age: ageCalculator(bornScientist, deadScientist),
        id: scientist.id
    };
    severalYearsArr.push(scientistAgeObj);
});
function ageCalculator(born, dead) {
    return dead - born;
}
severalYearsArr.sort((a, b) => a.age - b.age);
function scientistAgePosition(arrAge, imageArr) {
    for (let i = 0; i < arrAge.length; i++) {
        imageArr[i].classList.remove(`filter-scientists__image--${i+1}`);
        imageArr[i].classList.add(`filter-scientists__image--${arrAge[i].id}`)
        imageArr[i].classList.add('filter-scientists__image--default');
    }
}
leftBtnArr[2].addEventListener('click', () => {
    removeClass();
    scientistAgePosition(severalYearsArr, scientistsImageArr);
    leftBtnArr[2].classList.add('filter-scientists__active-btn');
})
// 4
// 5
function youngestScientist(scientistArr) {
    let youngest = scientistArr[0].born;
    let youngestId = scientistArr[0].id;
    for (let i = 0; i < scientistArr.length; i++) {
        if (youngest < scientistArr[i].born) {
            youngest = scientistArr[i].born;
            youngestId = scientistArr[i].id;
        } else {
            continue
        }
    }
    selectScientist(youngestId);
}
leftBtnArr[3].addEventListener('click', () => {
    removeClass();
    youngestScientist(scientists);
    leftBtnArr[3].classList.add('filter-scientists__active-btn');
});
// 5
// 6
rightBtnArr[0].addEventListener('click', () => {
    removeClass();
    scientistsImageArr[0].classList.add('filter-scientists__image--after');
    rightBtnArr[0].classList.add('filter-scientists__active-btn');
});
// 6
// 7
function surnameFirstLetter(arr, letter) {
    for (let i = 0; i < arr.length; i++) {
        let surnameArr = arr[i].surname.split("");
        if (surnameArr[0] === letter) {
            selectScientist(arr[i].id);
        }
    }
}
rightBtnArr[1].addEventListener('click', () => {
    removeClass();
    let firstLetter = 'C';
    surnameFirstLetter(scientists, firstLetter);
    rightBtnArr[1].classList.add('filter-scientists__active-btn');
});
// 7
// 8
function nameFirstLetter(arr, imageArr, letter) {
    for (let i = 0; i < imageArr.length; i++) {
        imageArr[i].classList.add('filter-scientists__image--default');
    }
    for (let i = 0; i < arr.length; i++) {
        let nameArr = arr[i].name.split("");
        if (nameArr[0] === letter) {
            removeScientist(arr[i].id);
        }
    }
}
rightBtnArr[2].addEventListener('click', () => {
    removeClass();
    let firstLetter = 'A';
    nameFirstLetter(scientists, scientistsImageArr, firstLetter);
    rightBtnArr[2].classList.add('filter-scientists__active-btn');
});
// 8
// 9
function leastLongestLived(arrAge) {
    let leastLivedId;
    let longestLivedId;
    for (let i = 0; i < arrAge.length; i++) {
        leastLivedId = arrAge[0].id;
        longestLivedId = arrAge[arrAge.length-1].id;
    }
    selectScientist(leastLivedId);
    redSelectScientist(longestLivedId);
}
rightBtnArr[3].addEventListener('click', () => {
    removeClass();
    leastLongestLived(severalYearsArr);
    rightBtnArr[3].classList.add('filter-scientists__active-btn');
});
// 9
// 10
function FirstLetter(arr) {
    for (let i = 0; i < arr.length; i++) {
        let nameArr = arr[i].name.split("");
        let surnameArr = arr[i].surname.split("");
        if (nameArr[0] === surnameArr[0]) {
            selectScientist(arr[i].id);
        }
    }
}
bottomBtn.addEventListener('click', () => {
    removeClass();
    FirstLetter(scientists);
    bottomBtn.classList.add('filter-scientists__active-btn');
});


// #Observer

const scientistBtnArr = leftBtnArr.concat(rightBtnArr, bottomBtn); 

const scientistButtonObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target)
        }
    })
}, {
    threshold: 1
});

scientistBtnArr.forEach(element => {
    scientistButtonObserver.observe(element);
})