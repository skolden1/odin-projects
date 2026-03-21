const display = document.querySelector(".showAnswer")
const dot = document.querySelector(".char.dot")

let firstNumber = "";
let operator = "";
let secondNumber = "";
let justCalculated = false

  const buttons = document.querySelectorAll(".buttons button")
  buttons.forEach(ele => {
    ele.addEventListener("click", (e) => {
      const value = e.target.textContent
    
      if(value === "C"){
        reset()
        return
      }

      if(value === "."){
        if(operator === ""){
          if(firstNumber.includes(".")) return
          firstNumber += value
          display.textContent = firstNumber
        } else {
          if(secondNumber.includes(".")) return
          secondNumber += value
          display.textContent = secondNumber
        }
        return
      }

      checkOp(value)
      if(value === "+" || value === "-" || value === "x" || value === "/" || value === ".") return
      checkEqualOperator(value)
      if(value === "=") return
      if (justCalculated) {
        firstNumber = ""
        secondNumber = ""
        operator = ""
        justCalculated = false
      }
      if(operator === ""){
        firstNumber += value
        display.textContent = firstNumber
      } else {
        secondNumber += value
        display.textContent = secondNumber
      }
      

    })
  })


const checkOp = (value) => {
  if(value === "+" || value === "-" || value === "x" || value === "/"){
    if(firstNumber && secondNumber){
    let result = operate(Number(firstNumber), operator, Number(secondNumber))
      display.textContent = result
      firstNumber = result
      secondNumber = ""
    }
    operator = value
    return
  }
}

const checkEqualOperator = (value) => {
  if(value === "=" && secondNumber === "") return
  if(value === "=" ){
    let result = operate(Number(firstNumber), operator, Number(secondNumber))
    display.textContent = result
    firstNumber = result
    secondNumber = ""
    operator = ""
    justCalculated = true
  } 
}

const add = (num, num2) => {
  return num + num2
}

const subtract = (num, num2) => {
  return num - num2
}

const multiply = (num, num2) => {
  return num * num2
}

const divide = (num, num2) => {
  if(num2=== "0" || num2 === 0){
    reset()
    return console.log("U cant divide w 0")
  } 
  return num / num2
}

const operate = (num1, operator, num2) => {
  if(operator === "+") return add(num1, num2)
  if(operator === "-") return subtract(num1, num2)
  if(operator === "x") return multiply(num1, num2)
  if(operator === "/") return divide(num1, num2)
}

const reset = () => {
  firstNumber = ""
  secondNumber = ""
  operator = ""
  display.textContent = "0"
}