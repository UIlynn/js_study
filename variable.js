// 1. Use strict 
// added in ES 5
// use this for Valina Javascript
'use strict';

// 2. Variable, rw(read/write)
// let (added in ES6)
// let : mutable
let globalName = 'global name';
{
  let name = `spencer`; // 'spencer'
  console.log(name);
  name = `hello`;
  console.log(name);
  console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (hoisting variable, don't ever use this!)
// hoisting : move declaration from bottom to top
// has no block scope
console.log(age); // undefined
{
  age = 4; 
  var age;
}
console.log(age); // 4

// 3. Constant, r(read only)
// const : immutable
// use const whenever possible.
// only use let if variable needs to change.
// favor immutable data type always for a few reasons:
// - security
// - thread safety : parallel access
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types : primitive types, frozen objects (i.e object.freeze())
// Mutable data types : all objects by defaults are mutable in JS


// 4. Variable types
// primitive, single item : number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

const count = 17;
const size = 17.1;
console.log(`value:${count}, type:${typeof count}`);
console.log(`value:${size}, type:${typeof size}`);


// Number - speacial numeric values
// infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity, negativeInfinity, nAn)

// + TS Expression
// let a2: number = 12;
// let b2: number = 1.2;

// + bigInt
const bigInt = 123456789123456789123456789123456789n;
console.log(`value:${bigInt}, type:${typeof bigInt}`);
Number.MAX_SAFE_INTEGER; // 9007199254740991

// String
const char = `c`;
const brendan = `breadan`;
const greeting = `hello ` + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!` // template literals(string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false : 0, null, undefined, NaN, '', [], {} ...
// true : any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined;
let x;
console.log(`value: ${x}, type: ${typeof x}`);
let y = undefined;
console.log(`value: ${y}, type: ${typeof y}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol2.description}, type: ${typeof symbol2}`);
// why use Symbol? 

// object, real-life object, data structure
const student = { name: "spencer", age: 20 };
student.age = 21;

// 5. Dynamic typing: dynamically typed language
let text = `hello`;
console.log(`value: ${text}, type: ${typeof text}`); // value: hello, type: string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); // value: 1, type: number
text = '7' + 5; // string
console.log(`value: ${text}, type: ${typeof text}`); // value: 75, type: string
text = '8' / '2'; // number
console.log(`value: ${text}, type: ${typeof text}`); // value: 4, type: number
// console.log(text.charAt(0)); // error!