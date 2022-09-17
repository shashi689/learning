//BOOK CLASS: REPRESENTS A BOOK
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

//UI CLASS :HANDLE UI TASKS
class UI {
  static displayBooks() {
    // const StoredBooks = [
    //   {
    //     title: "Book 1",
    //     author: "Author 1",
    //     isbn: "12345",
    //   },
    //   {
    //     title: "Book 2",
    //     author: "Author 2",
    //     isbn: "23456",
    //   },
    // ];
    const books = Store.getBooks();
    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector("#book-list");

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class=" btn btn-danger delete">X</a></td>
      `;
    list.appendChild(row);
  }
  static deleteBook(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove();
    }
  }

  //<div class ="alert alert-success">Whatever the message</div>
  static showAlerts(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));

    const container = document.querySelector(".container");
    const form = document.querySelector("#book-form");

    container.insertBefore(div, form);

    //vanish in 3 sec
    setTimeout(() => document.querySelector(".alert").remove(), 2000);
  }

  static clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }
}

//STORE  CLASS : HANDLE STORAGE
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }
  static addBooks(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem("books", JSON.stringify("books"));
  }

  static removeBook(isbn) {
    const books = Store.getBooks();
    books.forEach((book, index) => {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });
    localStorage.getItem("books", JSON.stringify(books));
  }
}

//EVENTS: DISPLAY BOOK
document.addEventListener("DOMContentLoaded", UI.displayBooks);

//EVENT: ADD A BOOK
document.querySelector("#book-form").addEventListener("submit", (e) => {
  //PREVENT ACTUAL SUBMIT
  e.preventDefault();
  //GET VALUES FROM THE FORM
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  //VALIDATION
  if (title === "" || author === "" || isbn === "") {
    UI.showAlerts("Please fill in the fields", "danger");
  } else {
    //INSTANTIATE BOOK
    const book = new Book(title, author, isbn);
    // console.log(book);

    //SUCCESS MESSAGE
    UI.showAlerts("Book Added", "success");

    //ADD BOOK TO UI
    UI.addBookToList(book);

    //ADD BOOK TO STORE
    Store.addBooks(book);

    //CLEAR FIELD AFTER SUBMIT
    UI.clearFields();
  }
});

//EVENT: REMOVE A BOOK
document.querySelector("#book-list").addEventListener("click", (e) => {
  UI.deleteBook(e.target);

  UI.showAlerts("Books Removed", "success");
});
