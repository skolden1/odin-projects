const container = document.querySelector(".container")

let containerWidth = 960

const btn = document.querySelector(".btn")

const createDivs = (count) => {
  let calcBoxWidth = containerWidth / count
  for(let i = 0; i < count * count; i++){
    const boxEle = document.createElement("div")
    boxEle.classList.add("box")
    boxEle.style.width = `${calcBoxWidth}px` 
    boxEle.style.height = `${calcBoxWidth}px`
    container.appendChild(boxEle);

    boxEle.addEventListener("mouseover", () => {
      boxEle.classList.add("active")
    })
  }
}

btn.addEventListener("click", () => {
  container.innerHTML = ""
  let msgCount = parseInt(prompt("Ange hur många rader du vill ha (5 = 5x5 tex...): "))
  if(msgCount > 100) return 
  createDivs(msgCount)
})

//start
createDivs(16)

