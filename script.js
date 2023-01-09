//VARIABLES
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const playerChoice = document.querySelector('.player');
const computerChoice = document.querySelector('.computer');
const roundResult = document.querySelector('.roundResult');
const playerScore = document.querySelector('.playerScore');
const computerScore = document.querySelector('.computerScore');
const gameScore = document.querySelector('.gameScore');

let playerSelection;
let computerSelection;
let result;
let win = 0;
let lose = 0;
let draw = 0;
let winLose;

//EVENTLISTENERS
rockButton.addEventListener('click', () => playRound("rock"));
paperButton.addEventListener('click', () => playRound("paper"));
scissorsButton.addEventListener('click', () => playRound("scissors"));



//FUNCTIONS
function game(){
// A game consists of 5 rounds

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
    computerSelection = getComputerChoice(1,3);
 
    playerChoice.textContent = playerSelection;
    computerChoice.textContent = computerSelection;

    //Change image of computerChoice
    document.getElementById("rpsPC").src = "img/rps.png";
    if (computerSelection === 'rock'){
        document.getElementById("rpsPC").src = "img/rock.png";
    } else if (computerSelection === 'paper'){
        document.getElementById("rpsPC").src = "img/paper.png";
    } else {
        document.getElementById("rpsPC").src = "img/scissors.png";
    }


    // Declare win, lose or draw
    switch (playerSelection.toLowerCase()){
        case 'rock':
            if (computerSelection === 'rock'){
                result = "It's a draw!";
                draw += 1;
                break;
            } else if (computerSelection === 'paper'){
                result = "Paper beats rock, you lose!";
                lose += 1;
                break;
            } else {
                result = "Paper beats scissors, you win!";
                win += 1;
                break;
            }

        case 'paper':
            if (computerSelection === 'paper'){
                result = "It's a draw!";
                draw += 1;
                break;
            } else if (computerSelection === 'scissors'){
                result = "Scissors beat paper, you lose!";
                lose += 1;
                break;
            } else {
                result = "Paper beats rock, you win!";
                win += 1;
                break;
            }

        case 'scissors':
            if (computerSelection === 'scissors'){
                result = "It's a draw!";
                draw += 1;
                break;
            } else if (computerSelection === 'rock'){
                result = "Rock beats scissors, you lose!";
                lose += 1;
                break;
            } else {
                result = "Scissors beat paper, you win!";
                win += 1;
                break;
            }
        default:
            result = `You typed ${playerSelection}, pick rock, paper or scissors!`;
            i -= 1;
         }

        roundResult.textContent = result;
        playerScore.textContent = "Player: " + win;
        computerScore.textContent = "Computer: " + lose;
   
        if (win === 5 | lose === 5) {
            game();
        }

    return(result);
    
}

function getComputerChoice(min, max){
    // Random number between 1-3 for computer choice, return 'rock', 'paper' or 'scissors'

    let x = Math.floor(Math.random()*(max-min + 1)) + min;
    if (x === 1) {
        return "rock";
    } else if (x === 2) {
        return "paper";
    } else if (x === 3) {
        return "scissors";
    }
}