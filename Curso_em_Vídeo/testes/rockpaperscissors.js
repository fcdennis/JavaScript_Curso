const getUserChoise = userInput => {
    userInput = userInput.toLowerCase()
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput
    } else {
        return 'Only use rock, paper or scissors'
    }
}

const getComputerChoise = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock'
            break
        case 1:
            return 'paper'
            break
        default:
            return 'scissors'
    }
}

function determineWinner(userChoise, computerChoise) {
    if (userChoise === 'bomb'){
        return 'win'
    } else if (userChoise === computerChoise) {
        return 'tie'
    } else if (userChoise === 'rock' && computerChoise === 'scissors' || userChoise === 'paper' && computerChoise === 'rock' || userChoise === 'scissors' && computerChoise === 'paper') {
        return 'win'
    } else {
        return 'lose'
    }
}

const playGame = (userChoise, computerChoise) => determineWinner(userChoise, computerChoise)

console.log(playGame(getUserChoise('paper'), getComputerChoise()))