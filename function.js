"use strict";
// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2..) { body... return; }
// one function === one thing
// naming : doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// Note! function is object in JS
function printHello() {
  console.log(`Hello`);
}
printHello();

function log(msg) {
  console.log(msg);
}
log("Hello@");
log(1234);

// Note!
// JS can not filter params type
// JS can not define return type
// TS? can do it!
// function log(msg : string) : number {
//     console.log(msg);
//     return 0;
// }

// 2. Parameters
// primitive parameters : passed by value
// object parameters : passed by reference
function changeName(obj) {
  obj.name = "coder";
}
const student = { name: "spencer" };
changeName(student);
console.log(student);

// 3. Default parameters (+ ES6)
function showMessage(msg, from = "unknown") {
  // prev ES6
  // if (from === undefined){
  //     from = 'unknown'
  // }
  console.log(`${msg} by ${from}`);
}
showMessage("Hi");

// 4. Rest Parameters ( + ES6)
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(`> ${args[i]}`);
  }

  for (const arg of args) {
    console.log(`>> ${arg}`);
  }

  args.forEach((element) => {
    console.log(`>>> ${element}`);
  });

  args.forEach((arg) => console.log(`>>>> ${arg}`));
}
printAll("dream", "coding", "spencer", "clara");

// 5. Local scope
// 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다.
let globalMsg = "global"; // global variable
function printMessage() {
  let localMsg = "hello";
  console.log(localMsg);
  console.log(globalMsg);
  function printAnother() {
    console.log(localMsg);
    let childMsg = "hello";
  }
  // console.log(childMsg); // err!
}
printMessage();

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum : ${sum(1, 2)}`);

// 7. Early return , early exit
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic..
  }
}

// good
function upgradeUser(user) {
  if (user.point <= 10) {
    return; // exit
  }
  //long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function.

// 1. Function expression
// a function declaration can be called earlier than it is defiend. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () {
  // anonymous function
  console.log("print");
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(ans, printYes, printNo) {
  if (ans === "i love you") {
    printYes();
  } else {
    printNo();
  }
}

const printYes = function () {
  console.log("yes");
};

// named function
// better debugging in debugger's stack traces
const printNo = function print() {
  console.log("no");
  // print() // recursions, ! need exit cond
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('i love you', printYes, printNo);


// Arrow function
// always anonymous
const simplePrint1 = function(){
    console.log('simplePrint1!');
}

const simplePrint2 = () => console.log('simplePrint2!')
const add = (a, b) => a + b;
const mul = (a, b) => {
    // do something more
    return a * b;
}

