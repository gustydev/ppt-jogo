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
console.log(escolhas);

escolhas.forEach((button) => {
    button.addEventListener('click', () => {
        console.log('a')
    })
})

function round(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection === computerSelection) {
        return console.log(`Você escolheu ${playerSelection}... e o computador também.\n\nEmpate!`)
    } else if (playerSelection === 'pedra' && computerSelection === 'papel') {
        scoreComp++
        return console.log(`Você escolheu ${playerSelection}.\nO computador escolheu ${computerSelection}.\n\nVocê perdeu!`)
    } else if (playerSelection === 'pedra' && computerSelection === 'tesoura') {
        scorePlayer++
        return console.log(`Você escolheu ${playerSelection}.\nO computador escolheu ${computerSelection}.\n\nVocê ganhou!`)
    } else if (playerSelection === 'papel' && computerSelection === 'pedra') {
        scorePlayer++
        return console.log(`Você escolheu ${playerSelection}.\nO computador escolheu ${computerSelection}.\n\nVocê ganhou!`)
    } else if (playerSelection === 'papel' && computerSelection === 'tesoura') {
        scoreComp++
        return console.log(`Você escolheu ${playerSelection}.\nO computador escolheu ${computerSelection}.\n\nVocê perdeu!`)
    } else if (playerSelection === 'tesoura' && computerSelection === 'pedra') {
        scoreComp++
        return console.log(`Você escolheu ${playerSelection}.\nO computador escolheu ${computerSelection}.\n\nVocê perdeu!`)
    } else if (playerSelection === 'tesoura' && computerSelection === 'papel') {
        scorePlayer++
        return console.log(`Você escolheu ${playerSelection}.\nO computador escolheu ${computerSelection}.\n\nVocê ganhou!`)
    }
}

function jogo() {
    scorePlayer, scoreComp = 0 // Reset scores before game
    const escolhas = ['pedra', 'papel', 'tesoura'];
    let playerSelection
    let computerSelection = getComputerChoice();
    round(playerSelection, computerSelection);
    if (scorePlayer === 5) {
        return console.log(`Parabéns, você ganhou!\n\nPlacar final: ${scorePlayer} jogador, ${scoreComp} computador`)
    } else {
        return console.log(`Que pena, você perdeu. Boa sorte na próxima!\n\nPlacar final: ${scorePlayer} jogador, ${scoreComp} computador`)
    }
}