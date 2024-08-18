let humanScore = 0;
let computerScore = 0;

let roundNo = 1;

// Score-boerd items
const hmScore = document.querySelector('.humanScores')
const compScore = document.querySelector('.computerScores')
const scoreBoard = document.querySelector('.score-board')

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

    const temDiv = document.querySelector('.tempRoundResult');
    if (temDiv) {
        temDiv.remove();
    }

    round.textContent = roundNo;
    // noteToSelectOption.textContent = "Choose your option:";
    playBtn.style.display ='none';
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

    // console.log(computerChoice  + ' comp')
    // console.log(humanChoice + ' human')
    // console.log(result)

    validateFivePointsWiner()
    styleScore()
    playBtn.style.display ='block';

    displayRoundResults(humanChoice,computerChoice, result)

}

function validateFivePointsWiner () {
    if (humanScore == 5 || computerScore == 5) {
        
        // alert('Game is over human score ' + humanScore + ' COM SCORE ' + computerScore)
        

        const divPlayAgain = document.createElement('div');
        divPlayAgain.className = 'divPlayAgain';

        const span = document.createElement('span');
        span.textContent = 'Game over'

        const playAgainBtn = document.createElement('button');
        playAgainBtn.textContent = 'Play Again';
        playAgainBtn.className = 'playAgain';

        divPlayAgain.appendChild(span);
        divPlayAgain.appendChild(playAgainBtn);

        divPlayAgain.style.display = 'flex';
        

        scoreBoard.appendChild(divPlayAgain)




        humanScore = 0;
        hmScore.textContent = "0"

        computerScore = 0; 
        compScore.textContent = '0';

        round.textContent = '0';
        roundNo = 1;
    }
        
}

function styleScore () {
    if(humanScore > computerScore) {
        hmScore.style.color = 'green'
        compScore.style.color = 'red'
    }
    if (humanScore < computerScore){
        hmScore.style.color = 'red'
        compScore.style.color = 'green'
    }
    if(humanScore == computerScore) {
        hmScore.style.color = 'orange'
        compScore.style.color = 'orange'
    }
}

//Round info section

function displayRoundResults (human, comp, result) {
    
    const rockImg = 'https://cdn-icons-png.flaticon.com/128/7053/7053536.png'
    const paperImg = 'https://cdn-icons-png.flaticon.com/128/3130/3130357.png'
    const scissorImg = "https://cdn-icons-png.flaticon.com/128/1077/1077617.png"
    
    if(human === "Rock"){
        human = rockImg
    }
    if(human === 'Paper'){
        human = paperImg
    }
    if (human === 'Scissor') {
        human = scissorImg
    }

    if(comp === "Rock"){
        comp = rockImg
    }
    if(comp === 'Paper'){
        comp = paperImg
    }
    if (comp === 'Scissor')  {
        comp = scissorImg
    }
    
    const roundSection = document.querySelector('.round-section')


    const divRoundresult = document.createElement('div');
    divRoundresult.className = 'tempRoundResult';
    divRoundresult.style.display = 'flex';
    divRoundresult.style.justifyContent = 'space-around';


    const imgHuman = document.createElement('img')
    const imgComp = document.createElement('img')
    const span = document.createElement('span')
    span.style.textAlign = 'center';
    span.style.margin = 'auto'
    span.style.fontSize = 'large';
    span.style.fontWeight = '700'

    span.style.color = result == "You won the round!" ? 'green' : 
    result == 'You lost the round' ? 'red' : 'orange'


    imgHuman.src = human;
    span.innerHTML = 'vs' + '<br>' + result;
    imgComp.src = comp;

    divRoundresult.appendChild(imgHuman);
    divRoundresult.appendChild(span);
    divRoundresult.appendChild(imgComp);

    roundSection.appendChild(divRoundresult)


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

