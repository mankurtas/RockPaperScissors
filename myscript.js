// Computer logic - should return choise

function getComputerChoice () {
    let random = Math.floor(Math.random() * 100);
    let choise = (random < 33) ? "scissor" : 
        (random < 66) ? "rock" :
        "paper";

    return choise
}

console.log(getComputerChoice())