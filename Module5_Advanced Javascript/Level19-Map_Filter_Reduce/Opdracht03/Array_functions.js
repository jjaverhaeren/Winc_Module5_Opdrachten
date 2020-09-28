//opdracht03  node Array_functions.js

//A
//Schrijf een JavaScript functie om het woord "cool" aan een array met strings toe te voegen.
// Gebruik de .push method.

let awesomeArray = ["nice", "awesome", "tof"];

const addTheWordCool = (array) => {
  array.push("cool");
};

addTheWordCool(awesomeArray);
console.log(awesomeArray);

//B
//Schrijf een JavaScript functie die het aantal elementen in een array retourneert.

let myFancyArray = ["item1", "item2", "item3", "item4", "item5"];

const numberOfItemsInArray = (array) => {
  let arrayLength = array.length;
  console.log(arrayLength);
};

numberOfItemsInArray(myFancyArray);

//C
//Schrijf een JavaScript functie om het éérste element uit een array te retourneren.

let myFancyArray2 = ["item1", "item2", "item3", "item4", "item5"];
const returnFirstItem = (array) => {
  let firstItem = array[0];
  console.log(firstItem);
};

returnFirstItem(myFancyArray2);

//D
//Schrijf een JavaScript functie om het laatste element uit een array te retourneren.

let animals = ["Haas", "Cavia", "Kip", "Schildpad"];
const returnLastItem = (array) => {
  let lastItem = array.length - 1;
  console.log(array[lastItem]);
};

returnLastItem(animals);

//E
//Schrijf een JavaScript functie om het eerste element uit een array te halen en het restant te retourneren .
let presidents = ["Trump", "Obama", "Bush", "Clinton"];

const exitFirst = (array) => {
  let slicedArray = array.slice(1);
  console.log(slicedArray);
};

const alsoExitsFirst = (array) => {
  let splicedArray = array.splice(0, 1);
  console.log(presidents);
};

exitFirst(presidents); // NO MUTATION of original array.
alsoExitsFirst(presidents); // MUTATES original array

//F
//Write a simple JavaScript program to join all elements of the following array into a string (with spaces).
let whatsWinc = ["Winc", "Academy", "is", "leuk", ";-}"];

const findOut = (array) => {
  let answer = array.join(" ");
  console.log(answer);
};

findOut(whatsWinc);

//G
//Schrijf een functie die 2 arrays ['array 1'] ['array2'] combineert tot 1 array ['array1', 'array2']
const cars = ["🚗", "🚙"];
const trucks = ["🚚", "🚛"];

const combineArrays = (array1, array2) => {
  let combined = [...array1, ...array2];
  console.log(combined);
};

combineArrays(cars, trucks);

//  node Array_functions.js
