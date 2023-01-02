let playerSelection;
let computerSelection;
let result;
let win = 0;
let lose = 0;
let draw = 0;
let winLose;


// ---------- FUNCTIONS BELOW THIS LINE
function game(){
// A game consists of 5 rounds
    // for (let i = 0; i < 5; i++) {
    //     playRound();
    // }
    
if (win > lose) {
    winLose = 'You win!';
} else if (win < lose){
    winLose = 'You lose!';
} else {
    winLose = "It's a draw."
}
alert(win + ' win, ' + lose + ' loss, ' + draw + ' draw. ' + winLose);
}



function playRound(playerSelection, computerSelection){    
// Play round of game. Rock defeats scissors, scissors defeat paper, paper defeats rock
// Return string that says if the player wins or loses.

    // Player choice via prompt, random choice for computer
    // playerSelection = prompt("Rock, paper or scissors?");
    // playerSelection = 'test';
    computerSelection = getComputerChoice(1,3);

    playerChoice.textContent = "Player chooses: " + playerSelection.toLowerCase();
    computerChoice.textContent = "Computer chooses: " + computerSelection;

    // Output choices to console
    // console.log("player: " + playerSelection.toLowerCase());
    // console.log("computer: " + computerSelection);



    // Declare win, lose or draw
    switch (playerSelection.toLowerCase()){
        case 'rock':
            if (computerSelection === 'rock'){
                // console.log("It's a draw!");
                result = "It's a draw!";
                draw += 1;
                break;
            } else if (computerSelection === 'paper'){
                // console.log("Paper beats rock, you lose!");
                result = "Paper beats rock, you lose!";
                lose += 1;
                break;
            } else {
                // console.log("Rock beats scissors, you win!");
                result = "Paper beat scissors, you win!";
                win += 1;
                break;
            }

        case 'paper':
            if (computerSelection === 'paper'){
                // console.log("It's a draw!");
                result = "It's a draw!";
                draw += 1;
                break;
            } else if (computerSelection === 'scissors'){
                // console.log("Scissors beat paper, you lose!");
                result = "Scissors beat paper, you lose!";
                lose += 1;
                break;
            } else {
                // console.log("Paper beats rock, you win!");
                result = "Paper beats rock, you win!";
                win += 1;
                break;
            }

        case 'scissors':
            if (computerSelection === 'scissors'){
                // console.log("It's a draw!");
                result = "It's a draw!";
                draw += 1;
                break;
            } else if (computerSelection === 'rock'){
                // console.log("Rock beats scissors, you lose!");
                result = "Rock beats scissors, you lose!";
                lose += 1;
                break;
            } else {
                // console.log("Scissors beat paper, you win!");
                result = "Scissors beat paper, you win!";
                win += 1;
                break;
            }
        default:
            // console.log(`You typed ${playerSelection}, pick rock, paper or scissors!`);
            result = `You typed ${playerSelection}, pick rock, paper or scissors!`;
            i -= 1;
         }

        roundResult.textContent = result;

         return(result);

}

function getComputerChoice(min, max){
    // Random number between 1-3 for computer choice, return 'rock', 'paper' or 'scissors'

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

// UI

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const playerChoice = document.querySelector('.player');
const computerChoice = document.querySelector('.computer');
const roundResult = document.querySelector('.roundResult');

rockButton.addEventListener('click', () => playRound("rock"));
paperButton.addEventListener('click', () => playRound("paper"));
scissorsButton.addEventListener('click', () => playRound("scissors"));
