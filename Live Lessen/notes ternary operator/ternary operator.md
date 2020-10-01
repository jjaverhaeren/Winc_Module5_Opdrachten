// <!-- ternary = bestaat uit drie onderdelen.

// condistion ? expr if true : expr if false

// is vervanger voor if else statement. -->

let age = 19;
let isLegal;
if (age >= 18) {
isLegal = true;
} else {
isLegal = false;
}


let age = 19;
let isLegal = age => 18 ? true : false;

let locked = 1;
let canChange = locked != 1 ? true : false;

//nog korter:
let canChange = locked != 1;

// vervolg in video..
