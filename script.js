
// Random number between 1-3 for computer choice, return 'rock', 'paper' or 'scissors'
function getComputerChoice(min, max){
    let x = Math.floor(Math.random()*(max-min + 1)) + min;
    // console.log(x);
    if (x === 1) {
        return "rock";
    } else if (x === 2) {
        return "paper";
    } else if (x === 3) {
        return "scissors";
    }
}

let playerSelection;
let computerSelection;
playRound();

// Play round of game. Rock defeats scissors, scissors defeat paper, paper defeats rock
// Return string that says if the player wins or loses.
function playRound(playerSelection, computerSelection){    

// Player choice via prompt
playerSelection = prompt("Rock, paper or scissors?");
computerSelection = getComputerChoice(1,3);

console.log(playerSelection.toLowerCase());
console.log(computerSelection);

switch (playerSelection.toLowerCase()){
    case 'rock':
        if (computerSelection === 'rock'){
            console.log("It's a draw!");
            break;
        } else if (computerSelection === 'paper'){
            console.log("Paper beats rock, you lose!");
            break;
        } else {
            console.log("Rock beats scissors, you win!");
            break;
        }

    case 'paper':
        if (computerSelection === 'paper'){
            console.log("It's a draw!");
            break;
        } else if (computerSelection === 'scissors'){
            console.log("Scissors beat paper, you lose!");
            break;
        } else {
            console.log("Paper beats rock, you win!");
            break;
        }

    case 'scissors':
        if (computerSelection === 'scissors'){
            console.log("It's a draw!");
            break;
        } else if (computerSelection === 'rock'){
            console.log("Rock beats scissors, you lose!");
            break;
        } else {
            console.log("Scissors beat paper, you win!");
            break;
        }
    default:
        console.log(`You typed ${playerSelection}, pick rock, paper or scissors!`);
}

 }

// Game consists of 5 rounds.
// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

