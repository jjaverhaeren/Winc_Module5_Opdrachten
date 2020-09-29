//Functies zijn waardes.

const applyFuncToThing = (func, thing) => {
    const result = func(thing);
    return result;
};

const double = number => number * 2;
const triple = number => number * 3;
const square = number => number * 4;

console.log(applyFuncToThing(double, 7)); //14
console.log(applyFuncToThing(triple, 5)); //15
console.log(applyFuncToThing(square, 6)); //24


//Een functie kan dus ook functies teruggeven:
const result2 = returnInput(double);
console.log(result2);
console.log(result2(9));