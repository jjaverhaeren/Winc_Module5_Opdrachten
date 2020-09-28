//ARRAY's:

let selectedColors = ["red", "blue"];
selectedColors[2] = "green";

console.log(selectedColors);

//Een array is een Object!

console.log(selectedColors.length);

//OBJECT's: multiple related variables combined.

// keys = properties  key/value pairs
// {} = Object literal

let person = {
  name: "Jørgen",
  age: 45,
};

//dot notation:
person.name = "Henk";

//Bracket notation:
person["name"] = "Mary";
console.log(person);

//FUNCTION's:

function greet() {
  console.log("Hello Venray");
}

greet();

//

function greet(name) {
  //name is hier de parameter
  console.log(`Hello ${name}`);
}

greet("Henk"); // 'Henk' is hier het argument

//

function greet2(name, lastName) {
  console.log(`Hello ${name} ${lastName}!`);
}

greet2("Henk", "de Vries");

//default value voor variables = 'undefined'.

//Verschillende soorten functies:

//performs a task:
function greet2(name, lastName) {
  console.log(`Hello ${name} ${lastName}!`);
}

//returns a value:
function square(number) {
  return number * number;
}

console.log(square(2));

//zelfs als je geen return statement specificeert, zal de functie altijd een waarde returnen ==> undefined

//Drie manieren om een functie te maken:

//function declaration === function statement: function declaration is hoisted!
function square(number) {
  return number * number;
}

//function expression: dit kan een functie mèt een naam zijn, of zónder naam (anonymous function)
const myFunction = function (parameter) {
  //function body van anonymous function
};

const myFunction = function WhateverName(parameter) {
  //function body van named function
}


//Arrow function:
const myFunction = () => {
  //function body
};
