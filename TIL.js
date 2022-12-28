// 1.Use strict
//added in ES 5
//use this for Vanila Javascript
'use strict';

//2. Variable, rw(read/write) - it can be just read and declartion other value into it
// let (added in ES6)
let globalName = 'global name'; //when we declare global scope, it stays in a memory forever. so WE SHOULD USE IT AS LITTLE AS POSSIBLE.
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
// also it shows the age as 'undefined' in console because of var hoisting
// so we shouldn't use the var

// 3. Constant, r(read only)
// use const whenever possible.
// only use let if variable needs to change.
const daysInWeek = 7;
const maxnumber = 5;


// Note!
// Imutable data types: const, premitive types. frozen objects (i.e object,freeze())
// Mutable data types: let, all objects by default are mutable in JS
// favor imutable data type always for a few reasons: 
// - security
// - thread safety
// - reduce human error

//4. Variable types 
// primitive, single item: number, string, boolean, null, undefined,symbol
// object, box container
// function, first-class function

const count = 17; //integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speicla numeric values: infinitiy, -infinity, NaN
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//string 
const char = 'c';
const kayden = 'kayden';
const greeting = 'hello' + kayden;
console.log(`value: ${greeting}!, type: ${typeof greeting}`);
const helloname = `hi + ${kayden}!`;
console.log(`value: ${helloname}!, type: ${typeof helloname}`);



//boolean
//false: 0,null,undefined,NaN, ''
//true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined - declared but has no value
let r;
console.log(`value: ${r}, type: ${typeof r}`);

// symbol, create unique identifiers for objects - symbol1 and 2 is different although it has same string
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
//this below is when we want same symbol with same string
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
// when we want to log symbol we must use .description otherwise it occur err
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);



// object =  real-life object, data structure => like a drawer or box
// . is like -> pointing
const ellie = { name: 'ellie', age: 20 };
ellie.age = 21;



// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); //h charAt is calling first character
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5; // 75 -> 5 become string
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2'; // string 8 / string 2-> string 8 / string 2  become number => 4 number
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));






