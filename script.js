
// Random number between 1-3 for computer choice, return 'rock', 'paper' or 'scissors'
function getComputerChoice(min, max){
    let x = Math.floor(Math.random()*(max-min + 1)) + min;
    if (x === 1) {
        document.getElementById("computer").innerHTML = "rock";
        return "rock";
    } else if (x === 2) {
        document.getElementById("computer").innerHTML = "paper";
        return "paper";
    } else if (x === 3) {
        document.getElementById("computer").innerHTML = "scissors";
        return "scissors";
    }
}

// Player choice via prompt
let playerSelection = prompt("Rock, paper or scissors?");
console.log(playerSelection);

// Play round of game. Rock defeats scissors, scissors defeat paper, paper defeats rock
// Return string that says if the player wins or loses.
 function playRound(playerSelection, computerSelection){


 }

// Game consists of 5 rounds.
// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

