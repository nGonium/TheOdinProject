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

function renderBooksToPage() {
  const BOOK_CONTAINER_ELEMENT = document.getElementById("book-container")
  myLibrary.map(book => {
    const element = createBookElement(book)
    BOOK_CONTAINER_ELEMENT.append(element)
  })
}

renderBooksToPage()