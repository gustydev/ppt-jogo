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

function round(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection === computerSelection) {
        return console.log(`Você escolheu ${playerSelection}... e o computador também.\n\nEmpate!`)
    } else if (playerSelection === 'pedra' && computerSelection === 'papel') {
        return console.log(`Você escolheu ${playerSelection}.\nO computador escolheu ${computerSelection}.\n\nVocê perdeu!`)
    } else if (playerSelection === 'pedra' && computerSelection === 'tesoura') {
        return console.log(`Você escolheu ${playerSelection}.\nO computador escolheu ${computerSelection}.\n\nVocê ganhou!`)
    } else if (playerSelection === 'papel' && computerSelection === 'pedra') {
        return console.log(`Você escolheu ${playerSelection}.\nO computador escolheu ${computerSelection}.\n\nVocê ganhou!`)
    } else if (playerSelection === 'papel' && computerSelection === 'tesoura') {
        return console.log(`Você escolheu ${playerSelection}.\nO computador escolheu ${computerSelection}.\n\nVocê perdeu!`)
    } else if (playerSelection === 'tesoura' && computerSelection === 'pedra') {
        return console.log(`Você escolheu ${playerSelection}.\nO computador escolheu ${computerSelection}.\n\nVocê perdeu!`)
    } else if (playerSelection === 'tesoura' && computerSelection === 'papel') {
        return console.log(`Você escolheu ${playerSelection}.\nO computador escolheu ${computerSelection}.\n\nVocê ganhou!`)
    }
}

function jogo() {
    // Reset scores before game
    scorePlayer = 0
    scoreComp = 0
    // Game: first to 5 wins
    while (scorePlayer < 5 || scoreComp < 5) {
        const escolhas = ['pedra', 'papel', 'tesoura']
        let playerSelection
        while ( ! (escolhas.includes(playerSelection)) ) {
            playerSelection = prompt('Pedra, papel ou tesoura?').toLowerCase()
        }
        let computerSelection = getComputerChoice()
        round(playerSelection, computerSelection)
    }
}