let counterDisplayElem = document.querySelector('.counter-display');
let counterMinusElem = document.querySelector('.counter-minus');
let counterPlusElem = document.querySelector('.counter-plus');

let count = 0;

counterPlusElem.addEventListener('click', () => {
    count++;
    updateDisplay(count);
})

counterMinusElem.addEventListener('click', () => {
    count--;
    updateDisplay(count);
})

function updateDisplay(count) {
    counterDisplayElem.innerHTML = count;
}