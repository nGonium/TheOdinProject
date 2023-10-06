const bookData = [
  new Book("The Hobbit", "J.R.R. Tolkien", 310, true),
  new Book("War and Peace", "L. Tolstoy", 1225, false),
]

const myLibrary = [...bookData];

function Book(title, author, numPages, isRead) {
  this.title = title
  this.author = author
  this.numPages = numPages
  this.isRead = isRead
  this.info = () => 
    `${title} by ${author}, ${numPages} pages, ${isRead ? "read" : "not read yet"} read`
}

function addBookToLibrary(title, author, numPages, isRead) {
  const newBook = new Book(title, author, numPages, isRead)
  myLibrary.push(newBook)
}

function createBookElement(book) {
  const element = document.createElement('div')
  element.classList.add('book-wrapper')
  element.textContent = book.info()
  return element
}

const BOOK_CONTAINER_ELEMENT = document.getElementById("book-container")

function appendBookToPage(book) {
    const element = createBookElement(book)
    BOOK_CONTAINER_ELEMENT.append(element)
}

function renderBooksToPage() {
  myLibrary.map(appendBookToPage)
}

function handleOpenNewBookForm(event) {
  event.preventDefault()

  const form = document.getElementById("new-book-form")
  form.classList.remove("hidden")

  event.target.classList.add("hidden")
}

function handleCloseNewBookForm(event)  {
  event.preventDefault()

  const form = document.getElementById("new-book-form")
  form.classList.add("hidden")

  const openNewBookButton = document.getElementById("open-new-book-form-button")
  openNewBookButton.classList.remove('hidden')
}

function handleNewBookFormSubmit(event) {
  event.preventDefault()
  const form = event.srcElement

  const formData = new FormData(form)
  const book = new Book(
    formData.get('title'),
    formData.get('author'),
    formData.get('pages'),
    formData.get('is-read'),
  )

  myLibrary.push(book)
  appendBookToPage(book)

  form.reset()
}


function addEventListeners() {
  const openNewBookButton = document.getElementById("open-new-book-form-button")
  openNewBookButton.addEventListener("click", handleOpenNewBookForm)

  const closeNewBookFormButton = document.getElementById("close-new-book-form-button")
  closeNewBookFormButton.addEventListener("click", handleCloseNewBookForm)

  const newBookForm = document.getElementById("new-book-form")
  newBookForm.addEventListener("submit", handleNewBookFormSubmit)
}

renderBooksToPage()
addEventListeners()