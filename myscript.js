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

console.log(getHumanChoice())