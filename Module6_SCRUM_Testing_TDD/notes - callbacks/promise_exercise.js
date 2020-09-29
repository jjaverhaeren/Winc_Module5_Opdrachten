//Exercise 1:
//Write a function testNum that takes a number as an argument and returns a Promise that tests if the value is less than or greater than the value 10.
//Log the result to the console.

// const testNum = (num) => {
//   return new Promise((resolve, reject) => {
//     if (num > 10) {
//       resolve(`${num} is greater than 10.`);
//     } else if (num < 10) {
//       console.log(`${num} is smaller than 10.`);
//     } else {
//       reject(`${num} is equal to 10.`);
//     }
//   });
// };

// testNum(10)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

//Exercise 2:
const arrayOfWords = ["cucumber", "tomatos", "avocado"];
const complicatedArray = ["cucumber", 44, true];

const makeAllCaps = (words) => {
  return new Promise((resolve, reject) => {
    if (
      words.every((word) => {
        return typeof word === "string";
      })
    ) {
      resolve(
        sortWords(
          words.map((word) => {
            return word.toUpperCase();
          })
        )
      );
    } else {
      reject("This is not a string");
    }
  });
};

const sortWords = (words) => {
  return new Promise((resolve, reject) => {
    if (words) {
      resolve(words.sort());
    } else {
      reject(`Sorry, this is not a string.`);
    }
  });
};

// makeAllCaps(arrayOfWords)
//   .then(sortWords(arrayOfWords))
//   .then(result => console.log(result))
//   .catch(error => console.log(`error`));

makeAllCaps(complicatedArray)
  .then(sortWords(complicatedArray))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
