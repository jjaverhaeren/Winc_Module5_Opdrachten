//Stel ul (id = "book-list) met li's met daarin een delete button (class = 'delete'):

let btns = document.querySelectorAll("#book-list .delete");

btns.forEach(function (btn) {
  btn.addEventListener("clcik", function (e) {
    const li = e.target.parentElement; //Hier vangen we de parentElement van de deleteknop ( = e.target) die we indrukken.
    li.parentNode.removeChild(li); // hier gaan we eerst naar de parentNode van de li. Dat is in dit geval de ul. Dan vanaf deze ul wil ik child(li) deleten.
  });
});

//the addEventlistener method attached a eventHandler to the specified element without overwriting existing eventHandlers so we can add many eventHandlers to one element.

//syntax: element.addEventListener(event, function, useCapture);

myVariable.addEventListener("click", function () {
  myElement.style.background = "lightblue";
});

myVariable.onclick = function () {
  myElement.style.background = "lightblue";
};

//deze twee doen in principe hetzelfde MAAR: met .onclick kun je maar 1 event toewijzen. Gebruik je onclick nog een keer dan wordt de voorgaande overschreven.

par2.classList.add("claasname2");

par2.classList.toggle("classname3");

//In de praktijk:

//vang het te veranderen element:

let element = document.querySelector("#idvanelement");

// definieer functie:
const makaParagraphBig = () => {
  element.classList.add("bold"); // de classname 'bold' is in CSS file gemaakt met bold lettertype.
  element.classList.remove("italic");
  element.classList.toggle("red");
};

//vang het element waarmee ik wil kunnen veranderen - dus bijvoorbeeld een button met id="btn2" en voeg hier de functionalitiet aan toe.
const buuton2 = document.querySelector("#btn2");
button2.addEventListener("click", makeParagraphBig);
