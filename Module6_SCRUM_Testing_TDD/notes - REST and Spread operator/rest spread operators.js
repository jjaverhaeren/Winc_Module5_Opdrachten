//wanneer je een onbepaald aantal argumenten wilt gebruiken zoals bijv:

function sum(x, y, z) {
  // dit kun je niet gebruiken omdat je misschien wel een vierde argument wilt gebruiken..
}

sum(1, 2, 3, 4);

//oplossing = rest parameters => rest operator

function sum(...numbers) {
  return numbers.reduce(function (prevvalue, currentvalue) {
    return prevvalue + currentvalue;
  });
}

console.log(sum(1, 2, 3)); //6
console.log(sum(1, 2, 3, 10)); //16

//ES6:

const sum = (...numbers) => {
  return numbers.reduce((prev, current) => prev + current);
};

//spread operator: Doet het tegenovergestelde.
function sum(x, y) {
  return x + y;
}

let nums = [1, 2, 3, 5];

console.log(sum(...nums)); // spread operator maakt van de array allemaal single arguments

//Wanneer ... staat aan het eind van de functie parameters, dan is het rest parameters. Deze verzamelt de rest van de parameters in een array.
//Wanneer ... staat in een function call, dan is het een spread operator. Deze zet een array om in een lijst argumenten.
