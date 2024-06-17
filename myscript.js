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
    let choice = prompt("Enter your choice - Rock/Paper/Scisser");
    return choice.toLowerCase();
}

const humanScore = 0;
const computerScore = 0;

//Logic to play one round

function playRound (humanChoice, computerChoice) {
    let winner = (humanChoice === "rock" 
    && computerChoice ==="scissor") ? "You won!" :
    (humanChoice === "scissor" && computerChoice === "paper") ? "You won!" :
    (humanChoice === "paper" && computerChoice === "rock") ? "You won!" :
    (humanChoice === computerChoice) ? "It is a tie" :
    "You losed";

    return winner + '\nHuman selection ' + humanChoice + '\nComputer selection ' + computerChoice
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


console.log(playRound(humanSelection, computerSelection))