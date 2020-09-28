// array maken van html elemnts:
Array.from(titles).forEach(function (item) {
  console.log(item);
});

// The Query Selector:

// JQuery:
$("#wrapper");

// vanilla JS:
const wrap = document.querySelector("#wrapper");
const wrap2 = document.querySelector("#book-list li:nth-child(2) .name");

// QuerySelector geeft steeds maar één item terug: oplossing =

const wrap3 = document.querySelectorAll("#book-list li:nth-child(2) .name");

Array.from(wrap3).forEach(function (book) {
  console.log(book);
});

// DOM traversing child to parent:

const bookList = document.querySelector("#book-list");

console.log(`the parent node is:`, bookList.parentNode);
console.log(`the parent node is:`, bookList.parentElement.parentElement);

// DOM traversing child to parent:

console.log(bookList.children);
console.log(bookList.childNodes); //is in principe hetzelfde. je krijgt alleen ook alle text elementen (bijv. page-breaks) te zien.

// traversing to sibling elements:

const bookList = document.querySelector("#book-list");

console.log(bookList.nextSibling); //geeft ook de text elementen (line-breaks)
console.log(bookList.nextElementSibling);

console.log(bookList.previousSibling); //geeft ook de text elementen (line-breaks)
console.log(bookList.previousElementSibling);

bookList.previousElementSibling.querySelector("p").innerHTML +=
  "<br />Too cool for everyone else!";

//met de querySelector zoek je in de previousElementSibling van bookList(#=book-list). We zoeken dan naar de p-tag en veranderen de HTML van de p.

//Events listeners:
const h2 = document.querySelector("#book-list h2");

h2.addEventListener("click", function (e) {
  console.log(e.target);
  console.log(e);
});

//check: Javascript DOM tutorial #9 - events van NetNinja.
