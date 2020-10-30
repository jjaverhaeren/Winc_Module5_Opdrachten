let fruits = ['apple', 'orange', 'banana'];
let newFruits = [...fruits];

//dit is een copy van de eerste array en dus geen verwijzing. de originele array kan worden gewijzigd zonder de kopie te veranderen.

let arr1 = ['a', 'b', 'c'];
let arr2 = ['d', 'e', 'f'];
let result = [...arr1, ...arr2]; //['a', 'b', 'c', 'd', 'e', 'f'];


let fruits2 = ['apple', 'orange', 'banana'];
let newFruits2 = ['Cherry', ...fruits2, "Strawberry"];

let fruits3 = ['apple', 'orange', 'banana'];
const getFruits = (f1, f2, f3) => {
    console.log(`fruits: ${f1}, ${f2} and ${f3}`);
}
getFruits(...fruits3);



//destructeren objecten:
let obj1 = {id:1, name: "hh"}
let obj2 = {age: 30, country: "nl"}
const employee = {...obj1, ...obj2};


const countArguments = (...arguments) => {// de argumenten worden in een array gestopt
    return arguments.length;
}

countArguments(1, 2, 3, 'tekst') //4


//
const combineArrays = (arr1, arr2) => {
    return [...arr1, ...arr2];
}

console.log(combineArrays(['a', 'b'], [23, 45, 'r']));

const onlyUniques = (...arguments) => {

}

console.log(onlyUniqies('cat', 'cat', 'dog', 'pig'))

let uniqueNum = [...new Set(num)];