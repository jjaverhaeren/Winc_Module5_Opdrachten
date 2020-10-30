// this refereert aan het huidige object
//alleen staand refereerft het aan het global object oftewel window

this.b = 420;
console.log(this.be); // 420
console.log(b); // 420

// this in a function:
//in non-strict -> not set, default to global object.
//in strict-mode -> not set, is undefined

//this in  an event handler
//this refereert aan het element dat het event heeft aangeroepen.

//explicit function binding
//mbv call() en apply() kun je eenobject method aanroepen, met een ander object als argument.


let person = {
    firstname: "Flip",
    lastName: "van Wijk"
}

let getName = function(title, suffix) {
    return this.firstname + "" + this.lastName;   
}

getName.call(person, "Mr.", ", teacher");
getName.apply(person, ["Mr.", ", teacher"]);

//Dit binden wekt niet met arrow functions. Hier blijft this altijd het globale object of de scope die reboven zit.

//bind()

//bind an object to the function call:

function f() {
    return this.name;
}

const g = f.bind({name: "Flip"});

console.log(g());

