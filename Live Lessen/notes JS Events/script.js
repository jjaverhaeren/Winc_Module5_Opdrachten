let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");
let menuStatus = false;

menu.style.marginLeft = "-300px";

function menuToggle() {
  if (menuStatus == false) {
    menu.style.marginLeft = "0px";
    menuStatus = true;
  } else if (menuStatus == true) {
    menu.style.marginLeft = "-300px";
    menuStatus = false;
  }
}

menu.onclick = menuToggle;

//Prevent default
let btn = document.querySelector(".test-btn");
let form = document.querySelector(".test-form");

function changeBtntext(e) {
  //e verwijst naar de event waar de functie aan gekoppeld is.
  //in dit geval de onclick op btn.
  e.preventDefault();
  changeBtntext.innerHTML = "Yay";
}

function stopFormSubmit(e) {
  e.preventDefault();
}

btn.onclick = changeBtntext;
form.onclick = stopFormSubmit;

//Op bovenstaande manier kan er maar 1 functie aan een event hangen.
//Er zijn twee manieren om meerdere functies aan een event te hangen.

//manier 1: Eventhandlers.
function firstFunction(e) {
  e.preventDefault(); // De preventDefault hoeft maar in 1 van de functies te worden gecalled.
  changeBtntext.innerHTML = "Yay";
}

function secondFunction() {
  btn.style, (backgroundColor = "red");
}

btn.onclick = firstFunction;
btn.onclick = secondFunction;

//Omdat er maar 1 functie aan de onclick gekoppeld kan zijn, zal de tweede functie de eerste overschrijven.
//alleen de tweede zal worden gecalled.

//Wat we moeten doen is een derde functie maken die de eerste twee callt:
function btnClick(e) {
  e.preventDefault();
  firstFunction();
  secondFunction();
}

//manier 2: EventListeners:
function firstFunction(e) {
  e.preventDefault();
  changeBtntext.innerHTML = "Yay";
}

function secondFunction() {
  btn.style, (backgroundColor = "red");
}

btn.addEventListener("click", firstFunction); //Let op: niet de () erachter omdat anders de functie al wordt gecalled on load.
btn.addEventListener("click", secondFunction);

//De functie kan ook rechtstreeks in de EventListener:
btn.addEventListener("click", function () {
  btn.style, (backgroundColor = "red");
});

//Manier om wel parameters mee te geven aan de te callen functie:
function firstFunction(e, name) {
  e.preventDefault();
  changeBtntext.innerHTML = name;
}

btn.addEventListener("click", function (e) {
  firstFunction(e, "Jørgen");
});
btn.addEventListener("click", function () {
  btn.style, (backgroundColor = "red");
});
