const array1 = ["a", "b", "c"];

for (const element of array1) {
  console.log(element);
}

const people = [
  {
    name: "Tom",
    family: {
      father: "Henkie",
    },
  },

  {
    name: "Henk",
    family: {
      father: "Tom",
    },
  },
];

for (const person of people) {
  const {
    name,
    family: { father },
  } = person;
}

for (const {
  name,
  family: { father },
} of people) {
  console.log(`Name: ${name}, Father ${father}`);
}

//
//
const findElement = (arr, predicate) => {};
