
let humanScore = 0
let computerScore = 0

const getComputerChoice = () => {
  const randomNr = Math.floor( Math.random() * 3)

  if(randomNr === 0) return "rock"
  if(randomNr === 1) return "paper"
  if(randomNr === 2) return "scissor"
}

const getHumanChoice = () => {
  const choice = prompt("Choose one of the following (Rock, paper, scissor)")
  return choice.toLowerCase()
}

const playRound = (humanChoice, compChoice) => {

  if(humanChoice === compChoice){
    console.log(`Both chose ${compChoice} its a tie`)
  } else if(humanChoice === "rock" && compChoice === "scissor" 
      || humanChoice === "paper" && compChoice === "rock" 
      || humanChoice === "scissor" && compChoice === "paper" ){
    console.log(`You win ${humanChoice} beats ${compChoice}`)
    humanScore ++
  } else {
    console.log(`You choosed ${humanChoice} computer chose ${compChoice} you loose`)
    computerScore ++
  }
}

const playGame = () => {
  for(let i = 0; i < 5; i++){
    const humanSelected = getHumanChoice()
    const compSelected = getComputerChoice()

    playRound(humanSelected, compSelected)
  }
  
  if(humanScore > computerScore) return console.log(`Game is over you won, score: You(${humanScore}) computerscore: ${computerScore}`)
  if(humanScore < computerScore){
    console.log(`Game is over you lost, score: You(${humanScore}) computerscore: ${computerScore}`)
  } else {
    console.log(`Game is over ITS A TIE, score: You(${humanScore}) computerscore: ${computerScore}`)
  }
}

playGame()



