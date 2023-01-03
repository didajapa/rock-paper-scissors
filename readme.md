1. Create function `getComputerChoice`, this function returns 'Rock', 'Paper' or 'Scissors'
2. Create variable `playerSelection`. Case-insensitive
    - use `prompt` to get input from the user
    
3. Write function `playRound` that plays single round of Rock Paper Scissors. Parameters for this function:
    - `playerSelection`
    - `computerSelection`
    
4. Return a string that declares the winner (such as *"You lose! Paper beats Rock"*)
5. `return` the result, *not* `console.log()`
6. Write new function `game()`. Call `playRound` inside this on to play a 5 round game that keeps score and reports a winner or loser at the end.
    - use `for` loop to play those five rounds
    - use `console.log` to display the results of each round and the winner at the end.

*RPS-UI edits*
1. Remove the logic that plays exactly five rounds
2. Create three buttons, one for each selection. Add eventlistener tot the buttons that call playRound function.
3. Add div for results and change console.log into DOM methods.
4. Display running score, and announce winner of the game once a player reaches 5 points
