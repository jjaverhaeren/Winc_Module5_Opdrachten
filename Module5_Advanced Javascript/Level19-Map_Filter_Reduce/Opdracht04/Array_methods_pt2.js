// Opdracht: Array methods - deel 2

//A
//Schrijf een JavaScript functie die een bepaald item weet te vinden en retourneren op basis van een bepaalde value.
const superheroes = [
  { name: "Batman", alter_ego: "Bruce Wayne" },
  { name: "Superman", alter_ego: "Clark Kent" },
  { name: "Spiderman", alter_ego: "Peter Parker" },
];

const findSpiderman = (array) => {
  let found = array.find((hero) => {
    return hero.name === "Spiderman";
  });
  console.log(found);
};

findSpiderman(superheroes);

//B
// In een array met integers. Zorg dat je een array returned met de integers verdubbeld.
let integers = [10, 11, 12, 13, 14, 15, 16, 17];

const double = (array) => {
  const newarray = array.map((num) => {
    return num * 2;
  });
  console.log(newarray);
};

double(integers);

//C
//In een array met integers. Schrijf een JavaScript functie die een checkt of er een integer in de array aanwezig is die groter is dan 10.
let integers2 = [10, 12, 13, 14, 15, 16, 17];

const checked = (array) => {
  const trueOrFalse = array.some((element) => element > 10);
  console.log(trueOrFalse);
};

checked(integers2);

//D
//In een array met strings. Schrijf een JavaScript functie die kijkt of er een bepaalde string: "Italy" in de array aanwezig is.
let theGreat7 = [
  "Canada",
  "France",
  "Germany",
  "Italy",
  "Japan",
  "United Kingdom",
  "United States",
];

let isItalyInTheGreat7 = (array) => {
  const yesOrNo = array.includes("Italy");
  console.log(yesOrNo);
};

isItalyInTheGreat7(theGreat7);

//E
//In een array met integers. Schrijf een JavaScript functie die elke integer vertienvoudigt.
let integers3 = [1, 4, 3, 6, 9, 7, 11];

const timesTen = (array) => {
  let newArray3 = array.map((integer) => {
    return integer * 10;
  });
  console.log(newArray3);
};

timesTen(integers3);

//F
//In een array met integers. Schrijf een JavaScript functie die checkt of alle waardes in de array onder de 100 zijn, en true or false retourneert.
let integers4 = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98];

const isBelow100 = (array) => {
  const trueOrFalse = array.every((element) => element < 100);
  console.log(trueOrFalse);
};

isBelow100(integers4);

//G
//Schrijf een JavaScript functie die alle waardes in de array bij elkaar optelt en het totaal van de som retourneert.
let integers5 = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234];

const bigChallenge = (array) => {
  const total = array.reduce((currentTotal, item) => {
    return item + currentTotal;
  }, 0);
  console.log(total);
}

bigChallenge(integers5);


// node Array_methods_pt2.js
