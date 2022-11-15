
function getComputerChoice(min, max){
    let x = Math.floor(Math.random()*(max-min + 1)) + min;
    console.log(x);
    if (x === 1) {
    document.getElementById("demo").innerHTML = "rock";
    return "rock";
    } else if (x === 2) {
        document.getElementById("demo").innerHTML = "paper";
        return "paper";
    } else if (x === 3) {
        document.getElementById("demo").innerHTML = "scissors";
        return "scissors";
    }
}


// function playRound(playerSelection, computerSelection){


// }

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

