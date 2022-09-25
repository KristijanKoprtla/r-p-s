
const words = ['rock', 'paper', 'scissors'];

function getComputerChoice () {
    const word = words[Math.floor(Math.random() * words.length)];
    return word;
}


function checkWinner(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return "Tie";
    }
    else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ){
        return "Player";
    }
    else {
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie") {
        return `It's a tie: ${playerSelection} can't beat ${computerSelection}`;
    }
    else if (result == "Player"){
        return `You win, Computer lose: ${playerSelection} beats ${computerSelection}`;
    }
    else {
        return `You lose, Computer win: ${computerSelection} beats ${playerSelection}`;
    }
}
function getPlayerChoice () {
    let validInput = false;
    while(validInput == false){
        const choice = prompt("rock paper or scissors?");
        if (choice == null) {
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if (words.includes(choiceInLower)){
            validInput = true;
            return choiceInLower;
        }
    }
}

function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if(checkWinner(playerSelection, computerSelection) == "Player" ){
            scorePlayer++;
        }
        else if(checkWinner(playerSelection, computerSelection) == "Computer" ){
            scoreComputer++;
        }
    }
    console.log("Game over")
    if(scorePlayer > scoreComputer) {
        console.log("Player wins");
    }
    else if(scorePlayer < scoreComputer) {
        console.log("Computer wins");
    }
    else {
        console.log("Its a tie");
    }
}
game();