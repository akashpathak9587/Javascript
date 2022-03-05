const slider = document.querySelector('.slider');
const prev = slider.querySelector('#prevPicture');
const next = slider.querySelector('#nextPicture');
const mySlides = slider.querySelectorAll('li');

let indexofImg = 0;

mySlides[indexofImg].className = 'visible';

let list = [];
mySlides.forEach(function (el) {
    list.push(el);
})

list[0].className = 'visible';


prev.addEventListener('click', () => {
    indexofImg--;
    if (indexofImg < 0) {
        indexofImg = list.length - 1;
        makeItInvisible(0);
        makeItVisible(indexofImg);
    } else {
        makeItInvisible(indexofImg + 1);
        makeItVisible(indexofImg);
    }
})

next.addEventListener('click', () => {
    indexofImg++;
    if (indexofImg >= list.length) {
        indexofImg = 0;
        makeItInvisible(list.length - 1);
        makeItVisible(indexofImg);
    } else {
        makeItInvisible(indexofImg - 1);
        makeItVisible(indexofImg);
    }
})

function makeItVisible(b) {
    list[b].className = 'visible';
}

function makeItInvisible(b) {
    list[b].className = '';
}

function InfiniteSlide() {
    indexofImg++;
    if (indexofImg >= list.length) {
        indexofImg = 0;
        makeItInvisible(list.length - 1);
        makeItVisible(indexofImg);
    } else {
        makeItInvisible(indexofImg - 1);
        makeItVisible(indexofImg);
    }
}

setInterval(() => {
    InfiniteSlide();
}, 10000);