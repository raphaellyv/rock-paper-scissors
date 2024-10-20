let humanScore = 0
let computerScore = 0

const possibleChoices = ['Rock', 'Paper', 'Scissor']
const resultsDiv = document.querySelector('#results')
const computerScoreSpan = document.querySelector('#computer-score')
const humanScoreSpan = document.querySelector('#human-score')
const resultParagraph = document.querySelector('#round-result')
const winnerParagraph = document.querySelector("#game-result")
const mainContainer = document.querySelector("#main-container")
const resetBtn = document.createElement("button")

resetBtn.textContent = 'PLAY AGAIN'
resetBtn.setAttribute('id', 'reset-btn')
resetBtn.addEventListener("click", () => { location.reload() })

function getComputerChoice() {
  const randomNumber = Math.random() * 3
  return randomNumber < 1 ? 'Rock' : randomNumber > 2 ? 'Paper' : 'Scissor'
}

function displayGameWinner(humanScore, computerScore) {
  if (humanScore > computerScore) {
    winnerParagraph.textContent = "GAME OVER! YOU WIN!!"
    winnerParagraph.style.cssText = "background-color: #cefdce; color: #689f38"
  } else {
    winnerParagraph.textContent = "GAME OVER! YOU LOSE!!"
    winnerParagraph.style.cssText = "background-color: #ffdde0; color: #d32f2f"
  }

  possibleChoices.map((choice) =>{
    const btn = document.querySelector(`#${choice.toLowerCase()}-btn`)
    btn.disabled = true
  })
}

function playRound(humanChoice, computerChoice) {
  const computerWins = `You lose! ${ computerChoice } beats ${ humanChoice }.`
  const humanWins = `You win! ${ humanChoice } beats ${ computerChoice }.`
  const aTie = 'It\'s a tie!'
  let result
  
  
  if (computerChoice === humanChoice) {
    result = aTie
  } else if ((computerChoice === 'Rock' && humanChoice === 'Scissor') ||
    (computerChoice === 'Paper' && humanChoice === 'Rock') ||
    (computerChoice === 'Scissor' && humanChoice === 'Paper')
  ) {
    result = computerWins
    computerScore+=1
  } else {
    result = humanWins
    humanScore+=1
  }
  
  resultParagraph.textContent = result
  
  computerScoreSpan.textContent = computerScore
  humanScoreSpan.textContent = humanScore
  
  const isGameOver = humanScore === 5 || computerScore === 5
  if (isGameOver) {
    displayGameWinner(humanScore, computerScore)
    mainContainer.appendChild(resetBtn)

    possibleChoices.map((choice) =>{
      const btn = document.querySelector(`#${choice.toLowerCase()}-btn`)
      btn.style.cssText = "cursor: not-allowed"
    })
  }
}

function playGame(choice) {
  const isGameOn = humanScore < 5 && computerScore < 5

  if (isGameOn) {
    return playRound(choice, getComputerChoice())
  }
}

possibleChoices.map((choice) =>{
  const btn = document.querySelector(`#${choice.toLowerCase()}-btn`)
  btn.addEventListener("click", () => { playGame(choice) })
})


