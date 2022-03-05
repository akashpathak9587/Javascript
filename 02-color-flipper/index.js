const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
const color = document.querySelector('.color')
const btn = document.querySelector('#btn')

btn.addEventListener('click', () => {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
})

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}