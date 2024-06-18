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

    return result
}

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();


// Logic to play entire game - 5 rounds

for (let i=1; i < 6; i++){
    let roundWiner = playRound(getHumanChoice(), getComputerChoice())

    console.log(i + ". Round: " + roundWiner + " Current result: Your score: " + humanScore + " Computer score: " + computerScore)
}

let finalResult = (humanScore > computerScore) ? "You are the winner" :
    (humanScore == computerScore) ? "It is a tie." :
    "You are the looser :(";

console.log (finalResult + " Your score: " + humanScore + " Computer score:" + computerScore)

