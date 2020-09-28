//asynchronous exaple:

let a3 = 100;
setTimeout(function () {
  a3++; console.log(a3);
}, 1);
console.log(a3);

setTimeout(function() { console.log(a3)},0)

let p = new Promise(function(resolve, reject){
    setTimeout(function() {
    resolve("Yo");
    },0)
});
console.log(p);

setTimeout(function() {
    console.log(p);
}, 10)
console.log(p);


setTimeout(() => {
    console.log(p);
}, 10);
