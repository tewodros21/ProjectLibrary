let myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

function toggleRead(index) {
  myLibrary[index].toggleRead();
  render();
}

function render() {
  let libraryEl = document.querySelector("#library");
  libraryEl.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookEl = document.createElement("div");
    bookEl.setAttribute("class", "book-card");
    bookEl.innerHTML = `
      <div class="card-header">
        <h3 class="title">${book.title}</h3>  
        <h5 class="author">${book.author}</h3> 
      </div>  
      <div class="card-header"> 
        <p>${book.pages} pages</p>
        <p class="read-status">${book.read ? "Read" : "Not Read Yet"} </p>
        <button type="button" class="btn btn-danger" onclick="removeBook(${i})">Remove</button>
        <button type="button" class="btn btn-info" onclick="toggleRead(${i})">Toggle Read</button>
      </div> `;

    libraryEl.appendChild(bookEl);
  }
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  render();
}
function addBookToLibrary() {
  // do stuff here
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").checked;
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  render();
}

document
  .querySelector("#new-book-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    addBookToLibrary();
  });

document.getElementById("new-book-form").addEventListener("reset");
