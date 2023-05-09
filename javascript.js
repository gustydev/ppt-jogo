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

function round(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection === computerSelection) {
        return alert(`Você escolheu ${playerSelection}... e o computador também. Empate!`)
    } else if (playerSelection === 'pedra' && computerSelection === 'papel') {
        return alert(`Você escolheu ${playerSelection}.\nO computador escolheu ${computerSelection}.\n\nVocê perdeu! Papel > Tesoura`)
    } else if (playerSelection === 'pedra' && computerSelection === 'tesoura') {
        return alert(`Você escolheu ${playerSelection}.\nO computador escolheu ${computerSelection}.\n\nVocê ganhou! Pedra > Tesoura`)
    } else if (playerSelection === 'papel' && computerSelection === 'pedra') {
        return alert(`Você escolheu ${playerSelection}.\nO computador escolheu ${computerSelection}.\n\nVocê ganhou! Papel > Pedra`)
    } else if (playerSelection === 'papel' && computerSelection === 'tesoura') {
        return alert(`Você escolheu ${playerSelection}.\nO computador escolheu ${computerSelection}.\n\nVocê perdeu! Tesoura > Papel`)
    } else if (playerSelection === 'tesoura' && computerSelection === 'pedra') {
        return alert(`Você escolheu ${playerSelection}.\nO computador escolheu ${computerSelection}.\n\nVocê perdeu! Pedra > Tesoura`)
    } else if (playerSelection === 'tesoura' && computerSelection === 'papel') {
        return alert(`Você escolheu ${playerSelection}.\nO computador escolheu ${computerSelection}.\n\nVocê ganhou! Tesoura > Papel`)
    }
}

function jogo() {
    const escolhas = ['pedra', 'papel', 'tesoura']
    let playerSelection
    while ( ! (escolhas.includes(playerSelection)) ) {
        playerSelection = prompt('Pedra, papel ou tesoura?').toLowerCase()
    }
    let computerSelection = getComputerChoice()
    return round(playerSelection, computerSelection)
}