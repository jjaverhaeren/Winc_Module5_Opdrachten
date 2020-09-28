const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];

//Bij al de volgende array.methods blijft het originele Array bestaan.
//.filter

const filteredItems = items.filter((item) => {
  return item.price <= 100;
});

console.log(items);
console.log(filteredItems);

//
//.map

const itemNames = items.map((item) => {
  return item.name;
});

console.log(itemNames);

//
//.find

const foundItem = items.find((item) => {
  return item.name === "Book";
});

console.log(foundItem);

//
//.forEach

items.forEach((item) => {
  let newPrice = item.price + 0;
  console.log(newPrice);
});

//
//.some
const hasInexpensiceItems = items.some((item) => {
  return item.price <= 0;
});

console.log(hasInexpensiceItems);

//
//.every
const hasInexpensiceItems2 = items.every((item) => {
  return item.price <= 1000;
});

console.log(hasInexpensiceItems2);

//
//.reduce

//uitleg .reduce: de functie iterates door de array.
// Bij elke iteratie telt hij de waarde van item.price op bij currentTotal en maakt van deze waarde de nieuwe waarde van currenttotal.
//De beginwaarde bij de eerste iteratie is de opgegeven 0. In dit geval zal de uitkomst dus het totaal van alle item.price's zijn.
const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);

console.log(total);

//
//.includes
const items2 = [1, 2, 3, 4, 5];

const includesTwo = items2.includes(2);

console.log(includesTwo); // true
