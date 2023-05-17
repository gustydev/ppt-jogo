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

escolhas.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.id;
        round(playerSelection, getComputerChoice());
    })
})    

const placar = document.querySelector("div.placar");
const displayPlayerScore = document.querySelector('div.player-score');
const displayCompScore = document.querySelector('div.comp-score');
const mensagem = document.querySelector('div.mensagem')

function round(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        mensagem.textContent = `Você escolheu ${playerSelection}... 
                                e o computador também.
                                Empate!`
    } else if (playerSelection === 'pedra' && computerSelection === 'papel') {
        scoreComp++
        mensagem.textContent = `Você escolheu ${playerSelection}. 
                                O computador escolheu ${computerSelection}.
                                Você perdeu!`
    } else if (playerSelection === 'pedra' && computerSelection === 'tesoura') {
        scorePlayer++
        mensagem.textContent = `Você escolheu ${playerSelection}. 
                                O computador escolheu ${computerSelection}.
                                Você ganhou!`
    } else if (playerSelection === 'papel' && computerSelection === 'pedra') {
        scorePlayer++
        mensagem.textContent = `Você escolheu ${playerSelection}. 
                                O computador escolheu ${computerSelection}.
                                Você ganhou!`
    } else if (playerSelection === 'papel' && computerSelection === 'tesoura') {
        scoreComp++
        mensagem.textContent = `Você escolheu ${playerSelection}. 
                                O computador escolheu ${computerSelection}. 
                                Você perdeu!`
    } else if (playerSelection === 'tesoura' && computerSelection === 'pedra') {
        scoreComp++
        mensagem.textContent = `Você escolheu ${playerSelection}. 
                                O computador escolheu ${computerSelection}. 
                                Você perdeu!`
    } else if (playerSelection === 'tesoura' && computerSelection === 'papel') {
        scorePlayer++
        mensagem.textContent = `Você escolheu ${playerSelection}. 
                                O computador escolheu ${computerSelection}.
                                Você ganhou!`
    }
    // After round, update scores
    displayPlayerScore.textContent = `Jogador: ${scorePlayer}`
    displayCompScore.textContent = `Computador: ${scoreComp}`    
}

function jogo() {
    scorePlayer, scoreComp = 0 // Reset scores before game
    let computerSelection = getComputerChoice();
    round(playerSelection, computerSelection);
    if (scorePlayer === 5) {
        return console.log(`Parabéns, você ganhou!\n\nPlacar final: ${scorePlayer} jogador, ${scoreComp} computador`)
    } else {
        return console.log(`Que pena, você perdeu. Boa sorte na próxima!\n\nPlacar final: ${scorePlayer} jogador, ${scoreComp} computador`)
    }
}