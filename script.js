alert('Now Playing: 5 rounds of rock paper scissors!')
game();

function game() {

    for(let i = 0; i < 5; i++){
        alert((playRound(computerPlay(), playerSelection())));
    }
}

function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

const computerSelection = computerPlay();

function playRound(computerSelection, playerSelection){
    console.log("playing round");
    if(playerSelection.toLowerCase() === 'rock'){
        if(computerSelection === 'scissors'){
            return 'You Win! Rock beats Scissors'
        } else if (computerSelection === 'paper'){
            return 'You Lose! Paper beats Rock'
        } else {
            return 'Tie! You both chose Rock'
        }
    } else if (playerSelection === 'paper') {
        if(computerSelection === 'rock'){
            return 'You Win! Paper beats Rock'
        } else if(computerSelection === 'scissors') {
            return 'You Lose! Scissors beats Paper'
        } else {
            return 'Tie! You both chose paper'
        }
    } else if (playerSelection === 'scissors'){
        if(computerSelection === 'paper'){
            return 'You Win! Scissors beats Paper';
        } else if (computerSelection === 'rock'){
            return 'You Lose! Rock beats Scissors'
        } else {
            return 'Tie! You both chose Scissors'
        }
    } 
}

function playerSelection() {
    let playerChoice;

    while (true) {
        if(!playerChoice){
            playerChoice = prompt('Choose One: Rock, Paper, Scissors');
        } else {
            playerChoice = playerChoice.toLowerCase();
            if(playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors'){
                return playerChoice;
            } else {
                playerChoice = prompt('Choose One: Rock, Paper, Scissors');
            }
        }
    }
}
