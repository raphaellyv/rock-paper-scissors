let humanScore = 0
let computerScore = 0
const possibleChoices = ['Rock', 'Paper', 'Scissor']
const resultsDiv = document.querySelector('#results')

function getComputerChoice() {
  const randomNumber = Math.random() * 3
  return randomNumber < 1 ? 'Rock' : randomNumber > 2 ? 'Paper' : 'Scissor'
}

function playRound(humanChoice, computerChoice) {
  const computerWins = `You lose! ${ computerChoice } beats ${ humanChoice }.`
  const humanWins = `You win! ${ humanChoice } beats ${ computerChoice }.`
  const aTie = 'It\'s a tie!'
  let result

  if (computerChoice === humanChoice) {
    result = aTie
  }
  else if ((computerChoice === 'Rock' && humanChoice === 'Scissor') ||
    (computerChoice === 'Paper' && humanChoice === 'Rock') ||
    (computerChoice === 'Scissor' && humanChoice === 'Paper')
  ) {
    result = computerWins
    computerScore+=1
  } else {
    result = humanWins
    humanScore+=1
  }
  
  
  const resultParagraph = document.createElement("p")
  resultParagraph.textContent = result
  resultsDiv.appendChild(resultParagraph)
  console.log('human', humanScore)
  console.log('computer', computerScore)
  return console.log(result)
}

possibleChoices.map((choice) =>{
  const btn = document.querySelector(`#${choice.toLowerCase()}-btn`)
  btn.addEventListener("click", () => { playRound(choice, getComputerChoice()) })
})
