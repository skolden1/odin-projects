const scissorBtn = document.getElementById("scissor")
const rockBtn = document.getElementById("rock")
const paperBtn = document.getElementById("paper")

const resultDiv = document.getElementById("results")
const scoreDiv = document.getElementById("score")


scissorBtn.addEventListener("click", () => {
  playRound("scissor", getComputerChoice())
})

rockBtn.addEventListener("click", () => {
  playRound("rock", getComputerChoice())
})

paperBtn.addEventListener("click", () => {
  playRound("paper", getComputerChoice())
})


let humanScore = 0
let computerScore = 0


const getComputerChoice = () => {
  const randomNr = Math.floor( Math.random() * 3)

  if(randomNr === 0) return "rock"
  if(randomNr === 1) return "paper"
  if(randomNr === 2) return "scissor"
}


const playRound = (humanChoice, compChoice) => {

  if(humanChoice === compChoice){
    resultDiv.textContent = `Both chose ${compChoice} its a tie`
  } else if(humanChoice === "rock" && compChoice === "scissor" 
      || humanChoice === "paper" && compChoice === "rock" 
      || humanChoice === "scissor" && compChoice === "paper" ){
    resultDiv.textContent = `You win ${humanChoice} beats ${compChoice}`
    humanScore ++
  } else {
    resultDiv.textContent = `You choosed ${humanChoice} computer chose ${compChoice} you loose`
    computerScore ++
  }
  scoreDiv.textContent = `Player score: ${humanScore}, Computer score: ${computerScore}`
  calcWinner()
}

const calcWinner = () => {
  if (humanScore === 5) {
    alert("Game ended player won")
    humanScore = 0
    computerScore = 0
  }

  if (computerScore === 5) {
    alert("Game ended computer won")
    humanScore = 0
    computerScore = 0
  }

  scoreDiv.textContent = `Player score: ${humanScore}, Computer score: ${computerScore}`
}




