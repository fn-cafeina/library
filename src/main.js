const addBookBtn = document.querySelector(".add-book-btn");

function openDialog() {
  const dialog = document.querySelector("dialog");
  dialog.showModal();
}

addBookBtn.addEventListener("click", openDialog);

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

const books = [
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

renderBooks(books);