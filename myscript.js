let humanScore = 0;
let computerScore = 0;

let roundNo = 1;

// Score-boerd items
const hmScore = document.querySelector('.humanScores')
const compScore = document.querySelector('.computerScores')
const scoreBoard = document.querySelector('.score-board')

const playBtn = document.querySelector('.play')
const playAgain = document.querySelector('.playAgain')


// Play round sections items

// const roundInfo = document.querySelector('.round-score')
const round = document.querySelector('.round')


// Choses options items
const selectionsButtons = document.querySelectorAll('button.selection');

// Game over section
// const noteToSelectOption = document.querySelector('.noteSelect')


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
   
    playBtn.style.display ='none';
 
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

    styleScore()
    playBtn.style.display ='block';

    displayRoundResults(humanChoice,computerChoice, result)
    validateFivePointsWiner()

}

// Game last till 5 score

function validateFivePointsWiner () {
    if (humanScore == 5 || computerScore == 5) {
        
        playBtn.style.display ='none';
        

        const divPlayAgain = document.createElement('div');
        divPlayAgain.className = 'divPlayAgain';

        const span = document.createElement('span');
        span.innerHTML = 'That is it!' + '<br>' + 'Game is over' + '<br>'
        span.style.textAlign = 'center';
        span.className = 'game-over'

        const playAgainBtn = document.createElement('button');
        playAgainBtn.textContent = 'Play Again';
        playAgainBtn.className = 'playAgain';

        divPlayAgain.appendChild(span);
        divPlayAgain.appendChild(playAgainBtn);

        divPlayAgain.style.display = 'flex';
        divPlayAgain.style.flexDirection = 'column'
        divPlayAgain.style.justifyContent = 'center'

        

        scoreBoard.appendChild(divPlayAgain)


        playAgainBtn.addEventListener('click',() => {
            
            
            humanScore = 0;
            hmScore.textContent = "0"
            hmScore.style.color = 'black'
        

            computerScore = 0; 
            compScore.textContent = '0';
            compScore.style.color = 'black'

            round.textContent = '0';
            roundNo = 1;

            playBtn.style.display ='block';

            const temDiv = document.querySelector('.tempRoundResult');
            temDiv.remove();
            divPlayAgain.remove();


        })

     
    }
        
}



// Style scoreboard

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



