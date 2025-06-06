// 🔍 What is a Closure?
// A closure is a function that remembers variables from its outer lexical scope
// even after the outer function has finished executing.
// In simpler terms, closures allow a function to access variables from an enclosing scope,
// even after that scope has closed.

// 🔍 Basic Closure Example
function outer() {
  let outerVar = 'I am from outer';

  function inner() {
    console.log(outerVar);
  }

  return inner;
}

const myClosure = outer();
myClosure(); // Output: I am from outer


// 🧠 Common Interview Example – Counter
// This pattern is frequently used to create private counters.
function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3


// 💼 Real-World Use Case – Private Variables
// Closures allow us to create private data in JavaScript.
function BankAccount() {
  let balance = 1000;

  return {
    getBalance: function () {
      return balance;
    },
    deposit: function (amount) {
      balance += amount;
    },
    withdraw: function (amount) {
      if (amount <= balance) balance -= amount;
      else console.log('Insufficient funds');
    },
  };
}

const myAccount = BankAccount();
console.log(myAccount.getBalance()); // 1000
myAccount.deposit(500);
console.log(myAccount.getBalance()); // 1500
myAccount.withdraw(2000); // Insufficient funds


// 🔄 Closure in Loops (with var vs let)
// ❌ Using var — not block scoped, so closures share the same variable
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log('var:', i); // All print 3
  }, 1000);
}

// ✅ Using let — block scoped, so closures get new variable each iteration
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log('let:', i); // 0, 1, 2
  }, 1000);
}


// 🔁 Function Factory Example
// A closure that creates customized greeting functions
function greet(message) {
  return function(name) {
    console.log(`${message}, ${name}!`);
  };
}

const sayHi = greet('Hi');
sayHi('Kalyan'); // Hi, Kalyan!

const sayHello = greet('Hello');
sayHello('Ravi'); // Hello, Ravi!


// 🔐 Advanced Use: Memoization Example
// Closures are used to cache expensive function calls
function memoizedAdd() {
  const cache = {};

  return function(n) {
    if (cache[n]) {
      console.log('Fetching from cache');
      return cache[n];
    } else {
      console.log('Calculating result');
      let result = n + 10;
      cache[n] = result;
      return result;
    }
  };
}

const add = memoizedAdd();
console.log(add(10)); // Calculating result -> 20
console.log(add(10)); // Fetching from cache -> 20


// ✅ Summary Tip for Interviews
// "A closure is when an inner function keeps access to the variables and parameters
// of its outer function, even after the outer function has returned."
