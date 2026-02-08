/* Quotes */

let quotes = [
    "Reading is dreaming with open eyes",
    "Books are best friends",
    "Knowledge is power",
    "Today a reader, tomorrow a leader"
];

let authors = [
    "Dr. Seuss",
    "Mark Twain",
    "Francis Bacon",
    "Margaret Fuller"
];

let index = 0;

function changeQuote() {
    document.getElementById("quote").innerText = quotes[index];
    document.getElementById("author").innerText = "- " + authors[index];

    index++;

    if (index >= quotes.length) {
        index = 0;
    }
}

setInterval(changeQuote, 3000);


/* Author of the Day */

let dailyAuthors = ["J.K.Rowling", "Shakespeare", "Dan Brown", "Tolkien"];

let day = new Date().getDay();

let todayAuthor = dailyAuthors[day % dailyAuthors.length];

let authorBox = document.getElementById("authorDay");

if (authorBox) {
    authorBox.innerText = todayAuthor;
}


/* Newsletter */

function saveEmail() {
    let email = document.getElementById("email").value;

    localStorage.setItem("email", email);

    alert("Saved Successfully");
}


/* Books Data */

let books = [
    {title:"Harry Potter", author:"Rowling", genre:"Fantasy"},
    {title:"Dune", author:"Herbert", genre:"Sci-Fi"},
    {title:"Sherlock", author:"Conan Doyle", genre:"Fiction"}
];

let bookDiv = document.getElementById("books");

if (bookDiv) {
    showBooks(books);
}

function showBooks(list) {

    bookDiv.innerHTML = "";

    list.forEach(b => {

        let div = document.createElement("div");

        div.className = "book-card";

        div.innerHTML =
            "<h3>" + b.title + "</h3>" +
            "<p>" + b.author + "</p>" +
            "<p>" + b.genre + "</p>";

        bookDiv.appendChild(div);
    });
}


/* Search */

function searchBooks() {

    let value = document.getElementById("search").value.toLowerCase();

    let result = books.filter(b =>
        b.title.toLowerCase().includes(value) ||
        b.author.toLowerCase().includes(value)
    );

    showBooks(result);
}


/* Tracker */

function calculate() {

    let total = Number(document.getElementById("total").value);
    let read = Number(document.getElementById("read").value);
    let speed = Number(document.getElementById("speed").value);

    let percent = (read / total) * 100;

    let days = (total - read) / speed;

    document.getElementById("result").innerText =
        "Completed: " + percent.toFixed(1) + "% | Days Left: " + days.toFixed(1);

    localStorage.setItem("progress", percent);
}


/* Random Book */

function randomBook() {

    let g = document.getElementById("genre").value;

    let filtered = books.filter(b => b.genre == g);

    let r = Math.floor(Math.random() * filtered.length);

    document.getElementById("suggest").innerText =
        filtered[r].title;
}


/* Feedback */

function sendFeedback() {

    let name = document.getElementById("name").value;
    let mail = document.getElementById("mail").value;
    let msg = document.getElementById("msg").value;

    if (name == "" || mail == "" || msg == "") {
        alert("Fill All Fields");
        return;
    }

    let data = {
        name: name,
        email: mail,
        message: msg
    };

    localStorage.setItem("feedback", JSON.stringify(data));

    document.getElementById("confirm").innerText =
        "Thank you for feedback!";
}