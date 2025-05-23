// 📚 JavaScript Array Methods Reference

// ================================
// 🔁 Iterating Methods
// ================================

/*
| Method                        | Description                                              | Example                                          |
|------------------------------|----------------------------------------------------------|-------------------------------------------------|
| length                       | Returns the number of elements in the array              | [1, 2, 3].length                      // 3      |
| forEach(callback)            | Executes a function on each element (no return)          | [1, 2, 3].forEach(x => console.log(x))          |
| map(callback)                | Returns a new array after applying a function            | [1, 2, 3].map(x => x * 2)              // [2, 4, 6] |
| filter(callback)             | Filters elements that pass a test                         | [1, 2, 3].filter(x => x > 1)          // [2, 3]  |
| reduce(callback, initial)    | Reduces array to a single value                           | [1, 2, 3].reduce((a, b) => a + b, 0)  // 6      |
| reduceRight(callback, initial)| Reduces from right to left                               | [1, 2, 3].reduceRight((a, b) => a - b)// 0     |
| some(callback)               | Checks if at least one element passes the test           | [1, 2, 3].some(x => x > 2)           // true   |
| every(callback)              | Checks if all elements pass the test                      | [1, 2, 3].every(x => x > 0)          // true   |
| find(callback)               | Finds the first element that passes the test             | [1, 2, 3].find(x => x > 1)           // 2      |
| findLast(callback)           | Finds the last element that passes the test (ES2023+)    | [1, 2, 3].findLast(x => x > 1)       // 3      |
| findIndex(callback)          | Index of the first match                                  | [1, 2, 3].findIndex(x => x > 1)      // 1      |
| findLastIndex(callback)      | Index of the last match (ES2023+)                         | [1, 2, 3].findLastIndex(x => x > 1)  // 2      |
*/

// ================================
// 🔄 Modifying Arrays
// ================================

/*
| Method                      | Description                                          | Example                                           |
|----------------------------|------------------------------------------------------|--------------------------------------------------|
| push(element)              | Adds to the end                                      | let arr = [1]; arr.push(2);          // [1, 2]   |
| pop()                      | Removes last element                                 | let arr = [1, 2]; arr.pop();         // [1]      |
| unshift(element)           | Adds to the start                                    | let arr = [2]; arr.unshift(1);       // [1, 2]   |
| shift()                    | Removes first element                                | let arr = [1, 2]; arr.shift();        // [2]      |
| splice(start, delete, ...add)| Add/remove elements                                | [1, 2, 3].splice(1, 1, 9)             // [1, 9, 3]|
| fill(value, start, end)    | Fills elements with a static value                   | [1, 2, 3].fill(0, 1, 3)               // [1, 0, 0]|
| copyWithin(target, start, end)| Copies part of array within itself                 | [1, 2, 3, 4].copyWithin(0, 2, 4)      // [3, 4, 3, 4]|
*/

// ================================
// 📋 Non-Modifying / Creating New Arrays
// ================================

/*
| Method                      | Description                                          | Example                                           |
|----------------------------|------------------------------------------------------|--------------------------------------------------|
| slice(start, end)          | Extracts portion of array                            | [1, 2, 3].slice(1, 2)                // [2]       |
| concat(...arrays)          | Merges arrays                                        | [1].concat([2, 3])                   // [1, 2, 3]|
| flat(depth)                | Flattens nested arrays                               | [1, [2, [3]]].flat(2)                // [1, 2, 3]|
| flatMap(callback)          | Maps + flattens                                      | [1, 2].flatMap(x => [x, x * 2])      // [1, 2, 2, 4]|
| toReversed()               | Returns a reversed copy (ES2023+)                    | [1, 2, 3].toReversed()               // [3, 2, 1]|
| toSorted(compareFn)        | Returns a sorted copy (ES2023+)                      | [3, 1, 2].toSorted()                 // [1, 2, 3]|
| toSpliced(start, delete, ...items)| Returns a spliced copy (ES2023+)               | [1, 2, 3].toSpliced(1, 1, 9)         // [1, 9, 3]|
| with(index, value)         | Returns copy with changed value (ES2023+)            | [1, 2, 3].with(1, 9)                 // [1, 9, 3]|
*/

// ================================
// 🔍 Searching / Checking
// ================================

/*
| Method                      | Description                                          | Example                                           |
|----------------------------|------------------------------------------------------|--------------------------------------------------|
| includes(value)            | Checks if value is in array                          | [1, 2, 3].includes(2)                // true      |
| indexOf(value)             | First index of value                                 | [1, 2, 3].indexOf(2)                 // 1         |
| lastIndexOf(value)         | Last index of value                                  | [1, 2, 1].lastIndexOf(1)             // 2         |
*/

// ================================
// 🔢 Sorting and Reversing
// ================================

/*
| Method                      | Description                                          | Example                                           |
|----------------------------|------------------------------------------------------|--------------------------------------------------|
| sort(compareFn)            | Sorts array in place                                 | [3, 1, 2].sort()                     // [1, 2, 3]  |
| reverse()                  | Reverses array in place                              | [1, 2, 3].reverse()                  // [3, 2, 1]  |
*/

// ================================
// 🔗 Joining and Strings
// ================================

/*
| Method                      | Description                                          | Example                                           |
|----------------------------|------------------------------------------------------|--------------------------------------------------|
| join(separator)            | Joins elements into a string                         | [1, 2, 3].join('-')                 // '1-2-3'    |
| toString()                 | Converts array to a comma-separated string          | [1, 2, 3].toString()                // '1,2,3'    |
*/

// ================================
// 📐 Utility / Structure
// ================================

/*
| Method                      | Description                                          | Example                                           |
|----------------------------|------------------------------------------------------|--------------------------------------------------|
| Array.isArray(arr)         | Checks if value is an array                          | Array.isArray([1, 2, 3])            // true       |
| Array.from(obj)            | Creates array from iterable or array-like object    | Array.from('abc')                   // ['a', 'b', 'c'] |
| Array.of(...elements)      | Creates array from arguments                         | Array.of(1, 2, 3)                  // [1, 2, 3]  |
*/





// 📚 JavaScript Array Methods with Examples

// ================================
// 🔁 Iterating Methods
// ================================

function lengthExample() {
  console.log('length:', [1, 2, 3].length); // 3
}

function forEachExample() {
  [1, 2, 3].forEach(x => console.log('forEach:', x));
}

function mapExample() {
  const result = [1, 2, 3].map(x => x * 2);
  console.log('map:', result); // [2, 4, 6]
}

function filterExample() {
  const result = [1, 2, 3].filter(x => x > 1);
  console.log('filter:', result); // [2, 3]
}

function reduceExample() {
  const sum = [1, 2, 3].reduce((a, b) => a + b, 0);
  console.log('reduce:', sum); // 6
}

function reduceRightExample() {
  const result = [1, 2, 3].reduceRight((a, b) => a - b);
  console.log('reduceRight:', result); // 0  (3 - 2 - 1)
}

function someExample() {
  const hasGreaterThan2 = [1, 2, 3].some(x => x > 2);
  console.log('some:', hasGreaterThan2); // true
}

function everyExample() {
  const allPositive = [1, 2, 3].every(x => x > 0);
  console.log('every:', allPositive); // true
}

function findExample() {
  const found = [1, 2, 3].find(x => x > 1);
  console.log('find:', found); // 2
}

function findLastExample() {
  const found = [1, 2, 3].findLast ? [1, 2, 3].findLast(x => x > 1) : undefined;
  console.log('findLast:', found); // 3 or undefined if unsupported
}

function findIndexExample() {
  const index = [1, 2, 3].findIndex(x => x > 1);
  console.log('findIndex:', index); // 1
}

function findLastIndexExample() {
  const index = [1, 2, 3].findLastIndex ? [1, 2, 3].findLastIndex(x => x > 1) : undefined;
  console.log('findLastIndex:', index); // 2 or undefined if unsupported
}

function runIteratingMethods() {
  lengthExample();
  forEachExample();
  mapExample();
  filterExample();
  reduceExample();
  reduceRightExample();
  someExample();
  everyExample();
  findExample();
  findLastExample();
  findIndexExample();
  findLastIndexExample();
}

// ================================
// 🔄 Modifying Arrays
// ================================

function pushExample() {
  let arr = [1];
  arr.push(2);
  console.log('push:', arr); // [1, 2]
}

function popExample() {
  let arr = [1, 2];
  const popped = arr.pop();
  console.log('pop:', popped, arr); // 2 [1]
}

function unshiftExample() {
  let arr = [2];
  arr.unshift(1);
  console.log('unshift:', arr); // [1, 2]
}

function shiftExample() {
  let arr = [1, 2];
  const shifted = arr.shift();
  console.log('shift:', shifted, arr); // 1 [2]
}

function spliceExample() {
  let arr = [1, 2, 3];
  arr.splice(1, 1, 9);
  console.log('splice:', arr); // [1, 9, 3]
}

function fillExample() {
  let arr = [1, 2, 3];
  arr.fill(0, 1, 3);
  console.log('fill:', arr); // [1, 0, 0]
}

function copyWithinExample() {
  let arr = [1, 2, 3, 4];
  arr.copyWithin(0, 2, 4);
  console.log('copyWithin:', arr); // [3, 4, 3, 4]
}

function runModifyingMethods() {
  pushExample();
  popExample();
  unshiftExample();
  shiftExample();
  spliceExample();
  fillExample();
  copyWithinExample();
}

// ================================
// 📋 Non-Modifying / Creating New Arrays
// ================================

function sliceExample() {
  const result = [1, 2, 3].slice(1, 2);
  console.log('slice:', result); // [2]
}

function concatExample() {
  const result = [1].concat([2, 3]);
  console.log('concat:', result); // [1, 2, 3]
}

function flatExample() {
  const result = [1, [2, [3]]].flat(2);
  console.log('flat:', result); // [1, 2, 3]
}

function flatMapExample() {
  const result = [1, 2].flatMap(x => [x, x * 2]);
  console.log('flatMap:', result); // [1, 2, 2, 4]
}

function toReversedExample() {
  const result = [1, 2, 3].toReversed ? [1, 2, 3].toReversed() : undefined;
  console.log('toReversed:', result); // [3, 2, 1] or undefined if unsupported
}

function toSortedExample() {
  const result = [3, 1, 2].toSorted ? [3, 1, 2].toSorted() : undefined;
  console.log('toSorted:', result); // [1, 2, 3] or undefined if unsupported
}

function toSplicedExample() {
  const result = [1, 2, 3].toSpliced ? [1, 2, 3].toSpliced(1, 1, 9) : undefined;
  console.log('toSpliced:', result); // [1, 9, 3] or undefined if unsupported
}

function withExample() {
  const result = [1, 2, 3].with ? [1, 2, 3].with(1, 9) : undefined;
  console.log('with:', result); // [1, 9, 3] or undefined if unsupported
}

function runNonModifyingMethods() {
  sliceExample();
  concatExample();
  flatExample();
  flatMapExample();
  toReversedExample();
  toSortedExample();
  toSplicedExample();
  withExample();
}

// ================================
// 🔍 Searching / Checking
// ================================

function includesExample() {
  const result = [1, 2, 3].includes(2);
  console.log('includes:', result); // true
}

function indexOfExample() {
  const index = [1, 2, 3].indexOf(2);
  console.log('indexOf:', index); // 1
}

function lastIndexOfExample() {
  const index = [1, 2, 1].lastIndexOf(1);
  console.log('lastIndexOf:', index); // 2
}

function runSearchingMethods() {
  includesExample();
  indexOfExample();
  lastIndexOfExample();
}

// ================================
// 🔢 Sorting and Reversing
// ================================

function sortExample() {
  const arr = [3, 1, 2];
  arr.sort();
  console.log('sort:', arr); // [1, 2, 3]
}

function reverseExample() {
  const arr = [1, 2, 3];
  arr.reverse();
  console.log('reverse:', arr); // [3, 2, 1]
}

function runSortingMethods() {
  sortExample();
  reverseExample();
}

// ================================
// 🔗 Joining and Strings
// ================================

function joinExample() {
  const result = [1, 2, 3].join('-');
  console.log('join:', result); // '1-2-3'
}

function toStringExample() {
  const result = [1, 2, 3].toString();
  console.log('toString:', result); // '1,2,3'
}

function runJoiningMethods() {
  joinExample();
  toStringExample();
}

// ================================
// 📐 Utility / Structure
// ================================

function isArrayExample() {
  const result = Array.isArray([1, 2, 3]);
  console.log('isArray:', result); // true
}

function fromExample() {
  const result = Array.from('abc');
  console.log('from:', result); // ['a', 'b', 'c']
}

function ofExample() {
  const result = Array.of(1, 2, 3);
  console.log('of:', result); // [1, 2, 3]
}

function runUtilityMethods() {
  isArrayExample();
  fromExample();
  ofExample();
}

// ================================
// To run all example groups individually:
// ================================

// runIteratingMethods();
// runModifyingMethods();
// runNonModifyingMethods();
// runSearchingMethods();
// runSortingMethods();
// runJoiningMethods();
// runUtilityMethods();
