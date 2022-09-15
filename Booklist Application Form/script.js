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
    const StoredBooks = [
      {
        title: "Book 1",
        author: "Author 1",
        isbn: "12345",
      },
      {
        title: "Book 2",
        author: "Author 2",
        isbn: "23456",
      },
    ];
    const books = StoredBooks;
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
  static showAlerts(message, className){
      const div= document.createElement('div');
      div.className= `alert alert-${className}`;
      div.appendChild(document.createTextNode(message));

      const container = document.querySelector('.container');
      const form = document.querySelector('#book-form');

      container.insertBefore(div , form);

      //vanish in 3 sec
      setTimeout(()=> document.querySelector('.alert').remove(), 3000);
  }

  static clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }
}

//STORE  CLASS : HANDLE STORAGE

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
    UI.showAlerts('Please fill in the fields', 'danger')
  } else {
    //INSTANTIATE BOOK
    const book = new Book(title, author, isbn);
    // console.log(book);
    //ADD BOOK TO UI
    UI.addBookToList(book);

    //CLEAR FIELD AFTER SUBMIT
    UI.clearFields();
  }
});

//EVENT: REMOVE A BOOK
document.querySelector("#book-list").addEventListener("click", (e) => {
  UI.deleteBook(e.target);
});
