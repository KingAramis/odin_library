/****************************** Library **************************************/ 

/************************  Get dom elements **********************************/

const addBookBtn = document.querySelector(".add-book-btn");
const closeFormBtn = document.querySelector(".close-form-btn");
const bookContainer = document.querySelector(".book-container");
const bookForm = document.querySelector(".book-form");


/********************** on listen functions *********************************/

addBookBtn.addEventListener("click", () => {
    bookForm.style.display = "flex";
});

closeFormBtn.addEventListener("click", () => {
    bookForm.style.display = "none";
});

bookForm.addEventListener("submit", handleSubmit);

/************************* book functions ************************************/

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    // called on submit
    // invokes constructor
    // takes data from form
    // adds to myLibrary array
}

function displayMyLibrary() {
        createNewBookContainer(myLibrary[bookContainer.children.length - 1]);
}

function createNewBookContainer(myLibrary) {
    const myBook = myLibrary;
    const newBookDiv = document.createElement("div");
    newBookDiv.classList.add("book");
    // Add image
    const bookImg = document.createElement("img");
    bookImg.src = "images/gruv-temple.png";
    newBookDiv.appendChild(bookImg);
    // Add title
    const bookTitle = document.createElement("h3");
    bookTitle.textContent = myBook.title;
    newBookDiv.appendChild(bookTitle);
    // Add author name
    const bookAuthor = document.createElement("p");
    bookAuthor.textContent = myBook.author;
    newBookDiv.appendChild(bookAuthor);
    // Add total pages
    const bookPages = document.createElement("p");
    bookPages.textContent = myBook.pages;
    newBookDiv.appendChild(bookPages);
    // Add read status
    const bookFinished = document.createElement("p");
    bookFinished.textContent ="Have I read this book? " + myBook.read;
    newBookDiv.appendChild(bookFinished);
    // Add remove button
    const rmvButton = document.createElement("button");
    rmvButton.classList.add("remove-btn");
    rmvButton.textContent = "Remove"
    newBookDiv.appendChild(rmvButton);
    // append to book container
    bookContainer.appendChild(newBookDiv);
}

function handleSubmit(event) {
    event.preventDefault();
    // Inputted values for new book
    const title = document.querySelector("#book-name").value;
    const author = document.querySelector("#author-name").value;
    const numPages = document.querySelector("#num-pages").value;
    const readStatus = document.querySelector(
                'input[name="read-status"]:checked').value;
    // create new book and push to array
    const newBook = new Book(title, author, numPages, readStatus);
    myLibrary.push(newBook);
    // clear form and close form
    bookForm.reset();
    bookForm.style.display = "none";
    console.log(myLibrary);
    displayMyLibrary();
};