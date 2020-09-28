//While loops:
// let age = 5;

// while (age < 10) {
//     console.log(`You are only ${age} years old. ${10-age} more years before you are 10.`);
//     age++;
// } 
// console.log(`You are now ten years old.`);


//For loops:

// for (age=5; age<10; age++) {
//     console.log(`You are only ${age} years old. ${10-age} more years before you are 10.`);
//     age++;
// } console.log(`You are now ten years old.`);

let links = document.getElementsByTagName("a");

for (i = 0; i <= links.length; i++) {
    console.log(`This is link number${i}.`);
}

document.write(`All links were looped!`);