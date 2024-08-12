let humanScore = 0;
let computerScore = 0;

let roundNo = 1;

const plyaBtn = document.querySelector('.play')
const selectionsButtons = document.querySelectorAll('button.selection');

const hmScore = document.querySelector('.humanScore')
const compScore = document.querySelector('.computerScore')

const round = document.querySelector('.round')


// Computer logic - should return choise

function getComputerChoice () {
    let random = Math.floor(Math.random() * 100);
    let choise = (random < 33) ? "Scissor" : 
        (random < 66) ? "Rock" :
        "Paper";
    return choise
}

//Human logic get Human choise

function getHumanChoice () {
    return new Promise ((resolve) => {
        //Add event listener to each button

        selectionsButtons.forEach(btn => {
            btn.addEventListener('click', (event) => {
                const humanChoice = event.target.textContent;
                console.log(humanChoice);

                // Resolve the promise with the user's choice

                resolve(humanChoice);

            })
        })
    })
}


//Logic to play one round

plyaBtn.addEventListener('click', playRound)

async function playRound (){
    round.textContent = roundNo;
    roundNo++;

    const humanChoice = await getHumanChoice()
    const computerChoice = getComputerChoice();

    let result;

    if (
        (humanChoice === "Rock" && computerChoice ==="Scissor") || 
        (humanChoice === "Scissor" && computerChoice === "Paper") ||
        (humanChoice === "Paper" && computerChoice === "Rock")
    ) {
        result = "You won!"; 
        humanScore++;
        hmScore.textContent = humanScore

    } else if (humanChoice === computerChoice) {
        result = "It is a tie";
    } else {
        result = "You lost";
        computerScore++;
        compScore.textContent = computerScore
    }

    console.log(computerChoice  + ' comp')
    console.log(humanChoice + ' human')
    console.log(result)

}





// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();


// Logic to play entire game - 5 rounds

// for (let i=1; i < 6; i++){
//     let roundWiner = playRound(getHumanChoice(), getComputerChoice())

//     console.log(i + ". Round: " + roundWiner + " Current result: Your score: " + humanScore + " Computer score: " + computerScore)
// }

// let finalResult = (humanScore > computerScore) ? "You are the winner" :
//     (humanScore == computerScore) ? "It is a tie." :
//     "You are the looser :(";

// console.log (finalResult + " Your score: " + humanScore + " Computer score:" + computerScore)

