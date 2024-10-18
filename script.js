let humanScore = 0
let computerScore = 0

const possibleChoices = ['Rock', 'Paper', 'Scissor']
const resultsDiv = document.querySelector('#results')
const computerScoreSpan = document.querySelector('#computer-score')
const humanScoreSpan = document.querySelector('#human-score')

const resultParagraph = document.querySelector('#round-result')
const winnerParagraph = document.querySelector("#game-result")

function getComputerChoice() {
  const randomNumber = Math.random() * 3
  return randomNumber < 1 ? 'Rock' : randomNumber > 2 ? 'Paper' : 'Scissor'
}

function displayGameWinner(humanScore, computerScore) {
  if (humanScore > computerScore) {
    winnerParagraph.textContent = "YOU WIN!!"
  } else {
    winnerParagraph.textContent = "YOU LOSE!!"
  }
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
  isGameOver && displayGameWinner(humanScore, computerScore)
}

possibleChoices.map((choice) =>{
  const btn = document.querySelector(`#${choice.toLowerCase()}-btn`)
  btn.addEventListener("click", () => { playGame(choice) })
})

function playGame(choice) {
  const isGameOn = humanScore < 5 && computerScore < 5

  if (isGameOn) {
    return playRound(choice, getComputerChoice())
  }
}

