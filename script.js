// const myObject = {
//   property: "Value!",
//   otherProperty: 77,
//   "obnoxious property": function () {
//     // do stuff!
//   },
// };

// console.log(myObject.property);
// console.log(myObject["otherProperty"]);

// function gameOver(winningPlayer) {
//   console.log("Congratulations!");
//   console.log(winningPlayer.name + " is the winner!");
// }

// const winningPlayer = {
//   name: "Haluk",
//   marker: "x",
// };

// function Player(name, marker) {
//   this.name = name;
//   this.marker = marker;
//   this.sayName = function () {
//     console.log(this.name);
//     console.log(this.marker);
//   };
// }

// const player1 = new Player("steve", "X");
// const player2 = new Player("also steve", "O");
// const player3 = new Player("Mark", "X");
// player1.sayName(); // logs 'steve'
// player2.sayName(); // logs 'also steve'
// player3.sayName(); // logs 'also steve'

// function Book(title, author, pages, read) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.read = read;
//   this.info = function () {
//     return `${this.title} by ${this.author},${this.pages}pages,${this.read}`;
//   };
// }

// const book1 = new Book("The Hobbit", "Tolkien", 295, "not read yet");
// console.log(book1.info());

// function Hero(name, level) {
//   this.name = name;
//   this.level = level;
// }

// const hero1 = new Hero("Mahmut", 3);

// Hero.prototype.greet = function () {
//   return `${this.name} says Hello`;
// };

// console.log(Object.getPrototypeOf(hero1));
// console.log(hero1.greet());

// function Warrior(name, level, weapon) {
//   // Chain constructor with call
//   Hero.call(this, name, level);

//   // Add a new property
//   this.weapon = weapon;
// }

// function Healer(name, level, spell) {
//   Hero.call(this, name, level);
//   this.spell = spell;
// }

// Warrior.prototype.attack = function () {
//   return `${this.name} attacks with the ${this.weapon}.`;
// };

// Healer.prototype.heal = function () {
//   return `${this.name} casts ${this.spell}.`;
// };

// const hero2 = new Warrior("Björn", 1, "axe");
// const hero3 = new Healer("Kanin", 1, "cure");

// console.log(hero2.attack(), hero3.heal());

// My form container
const formContainer = document.getElementById("form-element");
//My array that loops new books
const myLibrary = [];
//Constructor(kurucu) function
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  //newBook nesne fonksiyonuyla özellikleri ana arrayimize pushluyoruz
  myLibrary.push(newBook);
}
console.log(myLibrary);
function displayBooks() {
  //Selecting new books container
  const libraryContainer = document.querySelector(".content-container");
  libraryContainer.innerHTML = "";

  //We implementing
  myLibrary.forEach((book, index) => {
    //Div elemnti oluşturuyoruz ve item clasını veriyoruz
    const bookDiv = document.createElement("div");
    bookDiv.className = "item";
    //html şablonumuzu oluşturuoyuruz
    const htmlContent = `
        <div class="item-1">
          <h2>${book.title}</h2>
          <a onclick="removeBook(${index})" class="delete">&#10005;</a>
        </div>
        <p>${book.author}</p>
        <p>${book.pages}</p>
        <p>${book.read ? "Yes" : "No"}</p>
       
        <button onclick="toggleReadStatus(${index})">Change Read Status</button>
      `;
    //bookDiv adlı oluşturduğumuz divin içine şablonumuzu yazdırıyoruz
    bookDiv.innerHTML = htmlContent;
    //oluştuduğumuz divi books containerın içine ekliyoruz
    libraryContainer.appendChild(bookDiv);
  });
}

// Initial manual book entries
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 300, false);
addBookToLibrary("1984", "George Orwell", 400, true);

// Display books initially
displayBooks();

formContainer.addEventListener("submit", function (e) {
  e.preventDefault();

  const newTitle = document.getElementById("text-box").value;
  const newAuthor = document.getElementById("author-box").value;
  const newPages = document.getElementById("number-box").value;
  const newRead = document.getElementById("Read").checked;

  console.log(newTitle, newAuthor, newPages, newRead); // Check values

  addBookToLibrary(newTitle, newAuthor, newPages, newRead);
  displayBooks();

  // Reset the form
  document.getElementById("text-box").value = "";
  document.getElementById("author-box").value = "";
  document.getElementById("number-box").value = "";
  document.getElementById("Read").checked = false;

  // Hide the form
});

function removeBook(index) {
  myLibrary.splice(index, 1);
  displayBooks();
}

function toggleReadStatus(index) {
  myLibrary[index].read = !myLibrary[index].read;
  displayBooks();
}
