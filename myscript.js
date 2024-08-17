let humanScore = 0;
let computerScore = 0;

let roundNo = 1;

// Score-boerd items
const hmScore = document.querySelector('.humanScores')
const compScore = document.querySelector('.computerScores')


const playBtn = document.querySelector('.play')

// Play round sections items

// const roundInfo = document.querySelector('.round-score')
const round = document.querySelector('.round')


// Choses options items
const selectionsButtons = document.querySelectorAll('button.selection');

// Game over section
const noteToSelectOption = document.querySelector('.noteSelect')


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
                // const humanChoice = event.target.textContent;
                const humanChoice = event.target.alt
                console.log(humanChoice);

                // Resolve the promise with the user's choice

                resolve(humanChoice);

            })
        })
    })
}


//Logic to play one round

playBtn.addEventListener('click', playRound)

async function playRound (){
    round.textContent = roundNo;
    // noteToSelectOption.textContent = "Choose your option:";

    // roundInfo.textContent = ''
    roundNo++;

    const humanChoice = await getHumanChoice()
    const computerChoice = getComputerChoice();

    let result;

    if (
        (humanChoice === "Rock" && computerChoice ==="Scissor") || 
        (humanChoice === "Scissor" && computerChoice === "Paper") ||
        (humanChoice === "Paper" && computerChoice === "Rock")
    ) {
        result = "You won the round!"; 
        humanScore++;
        hmScore.textContent = humanScore

    } else if (humanChoice === computerChoice) {
        result = "It is a tie";
    } else {
        result = "You lost the round";
        computerScore++;
        compScore.textContent = computerScore
    }


    // roundInfo.innerHTML = "Your selection: " + humanChoice + " vs Computer selection: " + computerChoice + '<br>' + result

    console.log(computerChoice  + ' comp')
    console.log(humanChoice + ' human')
    console.log(result)

    validateFivePointsWiner()

}

function validateFivePointsWiner () {
    if (humanScore == 5 || computerScore ==5) {
        
        alert('Game is over human score ' + humanScore + ' COM SCORE ' + computerScore)
        
        humanScore = 0;
        hmScore.textContent = "0"

        computerScore = 0; 
        compScore.textContent = '0';

        
        round.textContent = '0';
        roundNo = 1;
    }
        
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

