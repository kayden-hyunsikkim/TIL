// 1.Use strict
//added in ES 5
//use this for Vanila Javascript
'use strict';

//2. Variable, rw(read/write) - it can be just read and declartion other value into it
// let (added in ES6)
let globalName = 'global name';
{let name = 'kayden'
console.log(name);
name = 'hello'
console.log(name);
console.log(globalName); // Because globalName is in the global scope so it can be called in the block as well.
}
console.log(name); // Because Name is a block scope so when I call it from out side of block, It can't be called.
console.log(globalName);

// var (Don't ever use it!!)
// var hoisting (move delartion from bottom to top)
// has no block scope
{
    age = 4;
    var age;
    console.log(age);
}

console.log(age);

// when we set varible with var, the situation happens in the upper block 
// if set variable with let, it shows error
// also it shows the age which is 4 in console because of var hoisting
// so we shouldn't use the var

// 3. Constant, r(read only)
// use const whenever possible.
// only use let if variable needs to change.
const daysInWeek = 7;
const maxnumber = 5;


// Note!
// Imutable data types: premitive types. frozen objects (i.e object,freeze())
// Mutable data types: all objects by default are mutable in JS
// favor imutable data type always for a few reasons: 
// - security
// - thread safety
// - reduce human error

//4. Variable types
// primitive, single item: number, string, boolean, null, undefined,symbol
// object, box container
// function, first-class function




