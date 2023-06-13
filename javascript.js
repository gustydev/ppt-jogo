function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) // Gerar número 0, 1, 2
    // 0 = rock, 1 = paper, 2 = scissors
    if (choice === 0) {
        return 'rock'
    } else if (choice === 1) {
        return 'paper'
    } else if (choice === 2) {
        return 'scissors'
    }
}

// Defining here so the round function knows what to do
let scorePlayer = 0
let scoreComp = 0

const choices = document.querySelectorAll("button");
const score = document.querySelector("div.score");
const displayPlayerScore = document.querySelector('div.player-score');
const displayCompScore = document.querySelector('div.comp-score');
const roundResult = document.querySelector('div.message');
const finalResult = document.querySelector('div.result');

const playAgain = document.createElement("button");
playAgain.textContent = 'Play again'

playAgain.addEventListener('click', () => {
    scorePlayer = 0;
    scoreComp = 0;
    roundResult.textContent = ''
    displayPlayerScore.textContent = `Player: ${scorePlayer}`
    displayCompScore.textContent = `Computer: ${scoreComp}`
    finalResult.textContent = ''
    score.removeChild(playAgain);
})

choices.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.id;
        if (!(scorePlayer === 5 || scoreComp === 5)) {
            round(playerSelection, getComputerChoice());
        }
        if (scorePlayer === 5 && scoreComp < 5) {
            finalResult.textContent = `Congratulations, you won!`
            score.appendChild(playAgain)
        } else if (scorePlayer < 5 && scoreComp === 5){
            finalResult.textContent = `You lost. Better luck next time!`
            score.appendChild(playAgain)
        }  
    })
})    

function round(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundResult.textContent = `You picked ${playerSelection}... 
                                and so did the computer.
                                It's a tie!`
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        scoreComp++
        roundResult.textContent = `You picked ${playerSelection}. 
                                The computer picked ${computerSelection}.
                                You lost!`
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        scorePlayer++
        roundResult.textContent = `You picked ${playerSelection}. 
                                The computer picked ${computerSelection}.
                                You won!`
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        scorePlayer++
        roundResult.textContent = `You picked ${playerSelection}. 
                                The computer picked ${computerSelection}.
                                You won!`
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        scoreComp++
        roundResult.textContent = `You picked ${playerSelection}. 
                                The computer picked ${computerSelection}. 
                                You lost!`
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        scoreComp++
        roundResult.textContent = `You picked ${playerSelection}. 
                                The computer picked ${computerSelection}. 
                                You lost!`
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        scorePlayer++
        roundResult.textContent = `You picked ${playerSelection}. 
                                The computer picked ${computerSelection}.
                                You won!`
    }
    // After round, update scores
    displayPlayerScore.textContent = `Player: ${scorePlayer}`
    displayCompScore.textContent = `Computer: ${scoreComp}`
}