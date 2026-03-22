const container = document.querySelector(".container")
const createBtn = document.querySelector(".newBookBtn")
const form = document.querySelector("#bookForm")
const closeBtn = document.querySelector(".closeBtn")

let myLibrary = []

function Book(title, author, pages, read = false) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.id = crypto.randomUUID()
}

Book.prototype.toggleRead = function () {
  this.read = !this.read
}

const addBookToLibrary = (title, author, pages) => {
  const newBook = new Book(title, author, pages)
  myLibrary.push(newBook)
}

addBookToLibrary("Potter", "Jk-Rowling", 400)
addBookToLibrary("Pippi", "Astrid Lindgren", 500)

const renderBook = () => {
  container.innerHTML = ""

  myLibrary.forEach(b => {
    const card = document.createElement("div")
    card.classList.add("card")

    if (b.read) {
    card.classList.add("read")
  }

    card.innerHTML = `
      <h3>${b.title}</h3>
      <p><strong>Author:</strong> ${b.author}</p>
      <p><strong>Pages:</strong> ${b.pages}</p>
      <button class="toggleBtn" id="${b.id}">
        ${b.read ? "Mark unread" : "Mark read"}
      </button>
      <button class="removeBtn" id="${b.id}">Remove book</button>
    `
    container.appendChild(card)
  })

}
renderBook()

  container.addEventListener("click", (e) => {
    if (e.target.classList.contains("removeBtn")) {
      removeBook(e.target.id)
    }
    if (e.target.classList.contains("toggleBtn")) {
    const id = e.target.id

    const book = myLibrary.find(b => b.id === id)

    book.toggleRead()

    renderBook()
  }
  })

const removeBook = (id) => {
  myLibrary = myLibrary.filter(b => b.id !== id)
  renderBook()
}


createBtn.addEventListener("click", () => {
  form.classList.remove("hidden")
  createBtn.classList.add("hide")
})

closeBtn.addEventListener("click", () => {
  form.classList.add("hidden")
  createBtn.classList.remove("hide")
})

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const title = document.querySelector("#title").value
  const author = document.querySelector("#author").value
  const pages = document.querySelector("#pages").value
  const formData = {
    title: title,
    author: author,
    pages: pages
  }

  addBookToLibrary(formData.title, formData.author, formData.pages)
  renderBook()
})