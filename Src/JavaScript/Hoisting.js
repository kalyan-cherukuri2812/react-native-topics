// hoisting_examples.js

/*
1. What is Hoisting?
Hoisting is when JavaScript moves variable and function declarations
to the top of their scope before the code runs.
Think of it like packing all variable names and function names at the
top first, but not their values.
*/

// 2. Hoisting with var
console.log(a); // undefined (declaration hoisted, value not)
var a = 5;
console.log(a); // 5

/*
Explanation: 'var a' is hoisted to the top, but the value 5 is
assigned later.
*/

// 3. Hoisting with let and const
// console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 10;

// console.log(y); // ReferenceError: Cannot access 'y' before initialization
const y = 20;

/*
Explanation: 'let' and 'const' are hoisted but cannot be accessed
before declaration due to Temporal Dead Zone (TDZ).
*/

// 4. Function declaration hoisting
sayHello(); // "Hello!" (function fully hoisted)
function sayHello() {
  console.log("Hello!");
}

/*
Explanation: Function declarations are fully hoisted (name and body),
so they can be called before declaration.
*/

// 5. Function expression hoisting
// sayHi(); // TypeError: sayHi is not a function
var sayHi = function() {
  console.log("Hi!");
};
sayHi(); // "Hi!"

/*
Explanation: Only the variable 'sayHi' is hoisted, initialized as
undefined. The function assignment happens later.
*/

// 6. Hoisting inside a function
function test() {
  console.log(a); // undefined (var declaration hoisted inside function)
  var a = 10;
  console.log(a); // 10
}
test();

/*
Quick Summary Table:
Keyword       | Hoisted? | Can access before declaration? | Notes
---------------------------------------------------------------
var           | Yes      | Yes → undefined               | Only declaration hoisted
let           | Yes      | No → ReferenceError           | TDZ until declaration
const         | Yes      | No → ReferenceError           | TDZ until declaration
Function Decl | Yes      | Yes → can call function       | Fully hoisted
Function Expr | Partially| No → TypeError                | Variable hoisted, function not
*/
