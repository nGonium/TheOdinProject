const myLibrary = [];

function Book(title, author, numPages, isRead) {
  this.title = title
  this.author = author
  this.numPages = numPages
  this.isRead = isRead
  this.info = () => 
    `${title} by ${author}, ${numPages} pages, ${isRead ? "read" : "not read yet"} read`
}

function addBookToLibrary() {
  
}