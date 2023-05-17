function getComputerChoice() {
    let escolha = Math.floor(Math.random() * 3) // Gerar número 0, 1, 2
    // 0 = Pedra, 1 = Papel, 2 = Tesoura
    if (escolha === 0) {
        return 'pedra'
    } else if (escolha === 1) {
        return 'papel'
    } else if (escolha === 2) {
        return 'tesoura'
    }
}

// Defining here so the round function knows what to do
let scorePlayer = 0
let scoreComp = 0

const escolhas = document.querySelectorAll("button");
const placar = document.querySelector("div.placar");
const displayPlayerScore = document.querySelector('div.player-score');
const displayCompScore = document.querySelector('div.comp-score');
const roundResult = document.querySelector('div.mensagem');
const finalResult = document.querySelector('div.result');

const playAgain = document.createElement("button");
playAgain.textContent = 'Jogar novamente'

playAgain.addEventListener('click', () => {
    scorePlayer = 0;
    scoreComp = 0;
    roundResult.textContent = ''
    displayPlayerScore.textContent = `Jogador: ${scorePlayer}`
    displayCompScore.textContent = `Computador: ${scoreComp}`
    finalResult.textContent = ''
    placar.removeChild(playAgain);
})

escolhas.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.id;
        if (!(scorePlayer === 5 || scoreComp === 5)) {
            round(playerSelection, getComputerChoice());
        }
        if (scorePlayer === 5 && scoreComp < 5) {
            finalResult.textContent = `Parabéns, você venceu!`
            placar.appendChild(playAgain)
        } else if (scorePlayer < 5 && scoreComp === 5){
            finalResult.textContent = `Que pena, você perdeu. Boa sorte na próxima!`
            placar.appendChild(playAgain)
        }  
    })
})    

function round(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundResult.textContent = `Você escolheu ${playerSelection}... 
                                e o computador também.
                                Empate!`
    } else if (playerSelection === 'pedra' && computerSelection === 'papel') {
        scoreComp++
        roundResult.textContent = `Você escolheu ${playerSelection}. 
                                O computador escolheu ${computerSelection}.
                                Você perdeu!`
    } else if (playerSelection === 'pedra' && computerSelection === 'tesoura') {
        scorePlayer++
        roundResult.textContent = `Você escolheu ${playerSelection}. 
                                O computador escolheu ${computerSelection}.
                                Você ganhou!`
    } else if (playerSelection === 'papel' && computerSelection === 'pedra') {
        scorePlayer++
        roundResult.textContent = `Você escolheu ${playerSelection}. 
                                O computador escolheu ${computerSelection}.
                                Você ganhou!`
    } else if (playerSelection === 'papel' && computerSelection === 'tesoura') {
        scoreComp++
        roundResult.textContent = `Você escolheu ${playerSelection}. 
                                O computador escolheu ${computerSelection}. 
                                Você perdeu!`
    } else if (playerSelection === 'tesoura' && computerSelection === 'pedra') {
        scoreComp++
        roundResult.textContent = `Você escolheu ${playerSelection}. 
                                O computador escolheu ${computerSelection}. 
                                Você perdeu!`
    } else if (playerSelection === 'tesoura' && computerSelection === 'papel') {
        scorePlayer++
        roundResult.textContent = `Você escolheu ${playerSelection}. 
                                O computador escolheu ${computerSelection}.
                                Você ganhou!`
    }
    // After round, update scores
    displayPlayerScore.textContent = `Jogador: ${scorePlayer}`
    displayCompScore.textContent = `Computador: ${scoreComp}`
}

function jogo() {
    scorePlayer, scoreComp = 0 // Reset scores before game
    round(playerSelection, computerSelection);
}
