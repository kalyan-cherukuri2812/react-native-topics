// A shallow copy copies only the top-level properties of an object or array.
//  If the object contains nested objects, they are still shared between the original and the copy.

// A deep copy copies everything, including nested objects — 
// so the original and the copy are completely independent.




const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Alice' }
];

// Shallow Copy
const shallowUsers = [...users];

// Modify nested object
shallowUsers[0].name = 'Mike';

console.log(users[0].name); // "Mike" ❌ original modified
// ✅ Why? Because the objects inside the array are still referencing the same memory.


const users1 = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Alice' }
];

// Deep Copy
const deepUsers = JSON.parse(JSON.stringify(users1));
deepUsers[0].name = 'Mike';

console.log(users[0].name); // "John" ✅ original preserved



// | Action                        | Shallow Copy                  | Deep Copy                                                          |
// | ----------------------------- | ----------------------------- | ------------------------------------------------------------------ |
// | Top-level properties          | ✅ Copied                      | ✅ Copied                                                           |
// | Nested objects/arrays         | ❌ Shared reference            | ✅ Completely new                                                   |
// | Method examples               | `{...obj}`, `Object.assign()` | `JSON.parse(JSON.stringify())`, `structuredClone()`, `cloneDeep()` |
// | Safe for React nested updates | ❌ No                          | ✅ Yes                                                              |

