const myLibrary = [];

myLibrary.push(new Book("Moby-Dick", "Herman Melville", 635, "yes"));
myLibrary.push(new Book("The Great Gatsby", "F. Scott Fitzgerald", 192, "yes"));
myLibrary.push(new Book("To Kill a Mockingbird", "Harper Lee", 336, "no"));

function renderBooks(books) {
  const library = document.querySelector(".library");

  while(library.firstChild) library.removeChild(library.firstChild);

  books.forEach((book, index) => {
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
    readedBtn.textContent = book.readed === "yes" ? "Readed" : "Unread";

    readedBtn.addEventListener("click", () => toggleReadState(myLibrary[index]));
    removeBtn.addEventListener("click", () => {
      myLibrary.splice(index, 1);
      renderBooks(myLibrary);
    });

    removeBtn.classList.add("btn");
    readedBtn.classList.add("btn");

    bookDiv.classList.add("book");

    bookDiv.dataset.id = book.id;

    buttonsDivContainer.append(removeBtn, readedBtn);
    bookDiv.append(titleP, authorP, pagesP, buttonsDivContainer);
    library.appendChild(bookDiv);
  });
}

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

function Book(title, author, nPages, readed) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }

  this.title = title;
  this.author = author;
  this.nPages = nPages;
  this.readed = readed;
  this.removed = false;
  this.id = self.crypto.randomUUID();

  this.toggleRead = function() {
    this.readed = this.readed === "yes" ? "no" : "yes";
  }

  this.toggleRemove = function() {
    this.removed = !this.removed;
  }
}

function toggleReadState(book) {
  book.toggleRead();
  renderBooks(myLibrary);
}

function addBookToLibrary() {
  const bookTitle = document.getElementById("book-title");
  const bookAuthor = document.getElementById("book-author");
  const bookPages = document.getElementById("book-pages");
  const readedSelect = document.getElementById("readed-select");

  if(bookTitle.value && bookAuthor.value && bookPages.value) {
    myLibrary.push(new Book(bookTitle.value, bookAuthor.value, bookPages.value, readedSelect.value));
    closeDialog();
    clearInputs();
  } else {
    alert("All inputs are required");
    return;
  }

}

function clearInputs() {
  document.getElementById("book-title").value = "";
  document.getElementById("book-author").value = "";
  document.getElementById("book-pages").value = "";
}

document.querySelector(".dialog-accept-btn").addEventListener("click", () => {
  addBookToLibrary();
  renderBooks(myLibrary);
});