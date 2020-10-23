// 1. String concatenation
console.log(`my` + ` cat`);
console.log(`1` + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`counter : ${counter}, preIncrement : ${preIncrement}`);

const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`counter : ${counter}, postIncrement : ${postIncrement}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators : || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;
const value3 = true;

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`); // check() exec
console.log(`or: ${value3 || value2 || check()}`); // check() no exec

// && (and), finds the first flasy value
console.log(`and: ${value1 && check()}`); // check() no exec
console.log(`and: ${value3 && check()}`); // check() exec

function check(){
    for (let i=0; i<10; i++){
        // wasting time
        console.log(`🤣`);
    }
    return true;
}

// ! (not)
console.log(!value1);

// often used to compress long if-statement
// nullableObject && nullableObject.something 

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(`== : ${stringFive == numberFive}`) // true
console.log(`!= : ${stringFive != numberFive}`) 

// === strict equality, no type conversion
console.log(`=== : ${stringFive === numberFive}`) // false
console.log(`!== : ${stringFive !== numberFive}`)

// object eqaulity by reference
const town1 = {name:'uiwang'}; // store ref, not value(set another memory)
const town2 = {name:'uiwang'};
const town3 = town1;
console.log(`town1 == town2 ${town1 == town2}`); // equal value, not equal ref
console.log(`town1 === town2 ${town1 === town2}`);
console.log(`town1 == town3 ${town1 == town3}`); 
console.log(`town1 === town3 ${town1 === town3}`);

// equality - puzzler
console.log(`0 == false : ${0 == false}`);
console.log(`0 === false : ${0 === false}`);
console.log(`'' == false : ${'' == false}`);
console.log(`'' === false : ${'' === false}`);
console.log(`null == undefined : ${null == undefined}`);
console.log(`null === undefined : ${null === undefined}`);

// 8. Conditional operators : if
const name = `spencer`;
if (name === `spencer`){
    console.log('Welcome, Spencer~!');
}else if(name == `coder`){
    console.log(`You are amazing coder`);
}else{
    console.log(`unknown`);
}

// 9. Ternary operator : ?
// condition ? true_value : false_value;
console.log(`name === 'spencer' ? 'yes' : 'no' >>> ${name === 'spencer' ? 'yes' : 'no'}`)
console.log(`name === 'clara' ? 'yes' : 'no' >>> ${name === 'clara' ? 'yes' : 'no'}`)

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = `IE`;
switch (browser) {
  case `IE`:
    console.log("go away!");
    break;
  case "Chrome":
  case "Firefox":
    console.log("ok Browser");
  default:
    console.log("same all");
    break;
}


// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0){
  console.log(`while : ${i}`);
  i--;
}

// do while loop, body code is executed first,
// then check the condition
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > -3);

// for loop, for(begin; cond; step)
for (i = 3; i > 0; i--){
  console.log(`for : ${i}`);
}

for (let i = 3; i > 0; i--){
  // inline variable declaration
  console.log(`inline variable for : ${i}`);
}



