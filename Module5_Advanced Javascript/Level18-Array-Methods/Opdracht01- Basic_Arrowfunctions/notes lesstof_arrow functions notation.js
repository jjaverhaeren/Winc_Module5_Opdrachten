//named function with two parameters:
function sum(a, b) {
  return a + b;
}

//dezelfde functie maar dan in arrow notatie:
const sum2 = (a, b) => {
  return a + b;
};

//omdat de functie maar 1 regel code is die een return geeft, kunnen we deze functie korter noteren:
const sum3 = (a, b) => a + b;

//
//named function with one parameter:
function isPositive(number) {
  return number >= 0;
}

//dezelfde functie maar dan in arrow notatie:
const isPositive2 = (number) => {
  return number >= 0;
};

//compacter:
//omdat er maar 1 parameter is, mogen de () rond de parameter weg.
const isPositive3 = (number) => number >= 0;

//
//named function with no parameters:
function randomNumber() {
  return Math.random;
}

//dezelfde functie maar dan in arrow notatie:
const randomNumber2 = () => {
  return Math.random;
};

//compacter:
const randomNumber3 = () => Math.random;

//anonimous function:
document.addEventListener("click", function () {
  console.log("click");
});

//dezelfde functie maar dan in arrow notatie:
document.addEventListener("click", () => {
  console.log("click");
});

//compacter:
document.addEventListener("click", () => console.log("click"));


