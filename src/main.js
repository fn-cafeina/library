function renderBooks(books) {
  const library = document.querySelector(".library");

  while(library.firstChild) library.removeChild(library.firstChild);

  books.forEach((book) => {
    const bookDiv = document.createElement("div");
    const titleP = document.createElement("p");
    const authorP = document.createElement("p");
    const pagesP = document.createElement("p");
    const buttonsDivContainer = document.createElement("div");
    const removeBtn = document.createElement("button");
    const readedBtn = document.createElement("button");

    titleP.textContent = book.title;
    authorP.textContent = book.author;
    pagesP.textContent = `Pages: ${book.nPages}`;

    removeBtn.textContent = "Remove";
    readedBtn.textContent = "Readed";

    removeBtn.classList.add("btn");
    readedBtn.classList.add("btn");

    bookDiv.classList.add("book");

    buttonsDivContainer.append(removeBtn, readedBtn);
    bookDiv.append(titleP, authorP, pagesP, buttonsDivContainer);
    library.appendChild(bookDiv);
  });
}

const myLibrary = [
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    nPages: 635,
    readed: true
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    nPages: 192,
    readed: true
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    nPages: 336,
    readed: false
  }
];

renderBooks(myLibrary);

const dialog = document.querySelector("dialog");
const addBookBtn = document.querySelector(".add-book-btn");
const dialogCancelBtn = document.querySelector(".dialog-cancel-btn");

function openDialog() {
  dialog.showModal();
}

function closeDialog() {
  dialog.close();
}

addBookBtn.addEventListener("click", openDialog);
dialogCancelBtn.addEventListener("click", closeDialog);

function Book(title, author, pages, readed) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }

  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readed = readed;

  this.toggleRead = function() {
    this.pages = !this.pages;
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const bookTitle = document.querySelector(".book-title");
const bookAuthor = document.querySelector(".book-author");
const bookPages = document.querySelector(".book-pages");
const readedSelect = document.querySelector(".readed-select");
const dialogAcceptBtn = document.querySelector(".dialog-accept-btn");