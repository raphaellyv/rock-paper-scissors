
function playGame() {
  let humanScore = 0
  let computerScore = 0
  
  function getComputerChoice() {
    const randomNumber = Math.random() * 3
    return randomNumber < 1 ? 'rock' : randomNumber > 2 ? 'paper' : 'scissor'
  }
  
  function getHumanChoice() {
    let choice = prompt('Choose rock, paper or scissor')
    return choice.toLowerCase()
  }


  function playRound(humanChoice, computerChoice) {
    const capitalizedHumanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
    const capitalizedComputerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
    const computerWins = `You lose! ${ capitalizedComputerChoice } beats ${ humanChoice }.`
    const humanWins = `You win! ${ capitalizedHumanChoice } beats ${ computerChoice }.`
    const aTie = 'It\'s a tie!'
    let result
  
    if ((computerChoice === 'rock' && humanChoice === 'scissor') ||
        (computerChoice === 'paper' && humanChoice === 'rock') ||
        (computerChoice === 'scissor' && humanChoice === 'paper')
      ) {
      result = computerWins
      computerScore+=1
    } else if ((computerChoice === 'rock' && humanChoice === 'paper') ||
               (computerChoice === 'paper' && humanChoice === 'scissor') ||
               (computerChoice === 'scissor' && humanChoice === 'rock')
      ){
      result = humanWins
      humanScore+=1
    } else {
      result = aTie
    }
      
    return console.log(result)
  }

  for (let step = 0; step < 5; step++) {
    playRound(getHumanChoice(), getComputerChoice())
  }

  console.log('human score', humanScore)
  console.log('computer score', computerScore)
}

playGame()

