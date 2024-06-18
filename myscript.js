// Computer logic - should return choise

function getComputerChoice () {
    let random = Math.floor(Math.random() * 100);
    let choise = (random < 33) ? "scissor" : 
        (random < 66) ? "rock" :
        "paper";

    return choise
}

//Human logic get Human choise

function getHumanChoice() {
    let choice = prompt("Enter your choice - Rock/Paper/Scissor");
    return choice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

//Logic to play one round

function playRound (humanChoice, computerChoice) {

    let result;
    if (
        (humanChoice === "rock" && computerChoice ==="scissor") || 
        (humanChoice === "scissor" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        result = "You won!"; 
        humanScore++;
    } else if (humanChoice === computerChoice) {
        result = " It is a tie";
    } else {
        result = "You lost";
        computerScore++;
    }

    // return winner

    // let winner = (humanChoice === "rock" 
    // && computerChoice ==="scissor") ? humanScore+=humanScore :
    // (humanChoice === "scissor" && computerChoice === "paper") ? "You won!" :
    // (humanChoice === "paper" && computerChoice === "rock") ? "You won!" :
    // (humanChoice === computerChoice) ? "It is a tie" :
    // "You losed";

    return result + '\nHuman selection ' + humanScore + " " + humanChoice + 
    '\nComputer selection ' + computerScore + " " + computerChoice

    // return result
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection))

// Logic to play entire game - 5 rounds

// for (let i=0; i < 5; i++){

// }
