let modal = document.getElementById('modal');
let btn = document.getElementById('myBtn');
let closeBtn = document.getElementById('close');

const triangleBoard = document.getElementById('triangle');
const MatchBoard = document.getElementById('match-board');
const result = document.getElementById('result');
const score = document.querySelector('.count p')
const pAgain = document.getElementById('play-again');

btn.onclick = () => {
    modal.style.display = "block";
}

closeBtn.onclick = () => {
    modal.style.display = "none";
}

window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

const game = () => {
    let pScore = 0;
    const playMatch = () => {
        const options = document.querySelectorAll('.triangle button');
        const ComputerOptions = ['rock', 'paper', 'scissors']
        options.forEach((option) => {
            option.addEventListener('click', () => {
                triangleBoard.style.display = "none";
                MatchBoard.style.display = "block";
                const yourChoice = document.getElementById(`your${option.name}`);
                yourChoice.style.display = "block";

                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = ComputerOptions[computerNumber];
                const houseChoice = document.getElementById(`h${computerChoice}`)
                houseChoice.style.display = "block";

                const yChoice = option.name;

                CompareChoices(yChoice, computerChoice);
                pAgain.addEventListener('click', () => {
                    triangleBoard.style.display = "block";
                    MatchBoard.style.display = "none";
                    yourChoice.style.display = "none";
                    houseChoice.style.display = "none";
                })
            })
        })
    }
    const CompareChoices = (yChoice, computerChoice) => {
        if (yChoice === computerChoice) {
            result.innerHTML = "Draw";
            return;
        }
        if (yChoice === 'rock') {
            if (computerChoice === 'scissors') {
                result.innerHTML = 'You Won';
                pScore++;
                updateScore();
                return;
            } else {
                result.innerHTML = 'You Lost';
                pScore--;
                updateScore();
                return;
            }
        }
        if (yChoice === 'scissors') {
            if (computerChoice === 'paper') {
                result.innerHTML = 'You Won';
                pScore++;
                updateScore();
                return;
            } else {
                result.innerHTML = 'You Lost';
                pScore--;
                updateScore();
                return;
            }
        }
        if (yChoice === 'paper') {
            if (computerChoice === 'rock') {
                result.innerHTML = 'You Won';
                pScore++;
                updateScore();
                return;
            } else {
                result.innerHTML = 'You Lost';
                pScore--;
                updateScore();
                return;
            }
        }
    }
    const updateScore = () => {
        score.textContent = pScore;
    }
    playMatch();
}

game();