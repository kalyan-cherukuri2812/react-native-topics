/*
| Method                     | Description                                   | Example                                                            |
| -------------------------- | --------------------------------------------- | -------------------------------------------------------------------|
| `length`                   | Returns the length of a string                | `'hello'.length                                 // 5`              |
| `charAt(index)`            | Returns the character at a given index        | `'hello'.charAt(1)                              // 'e'`            |
| `slice(start, end?)`       | Extracts part of a string                     | `'hello'.slice(1, 4)                            // 'ell'`          |
| `substring(start, end?)`   | Similar to `slice` (no negative values)       | `'hello'.substring(1, 4)                        // 'ell'`          |
| `substr(start, length)`    | Extracts part of a string (deprecated)        | `'hello'.substr(1, 3)                           // 'ell'`          |
| `toUpperCase()`            | Converts to uppercase                         | `'hello'.toUpperCase()                          // 'HELLO'`        |
| `toLowerCase()`            | Converts to lowercase                         | `'HELLO'.toLowerCase()                          // 'hello'`        |
| `trim()`                   | Removes whitespace from both ends             | `'  hello  '.trim()                             // 'hello'`        |
| `includes(substr)`         | Checks if string contains substring           | `'hello'.includes('ell')                        // true`           |
| `startsWith(prefix)`       | Checks if string starts with substring        | `'hello'.startsWith('he')                       // true`           |
| `endsWith(suffix)`         | Checks if string ends with substring          | `'hello'.endsWith('lo')                         // true`           |
| `indexOf(substr)`          | Returns first index of substring              | `'hello'.indexOf('l')                           // 2`              |
| `lastIndexOf(substr)`      | Returns last index of substring               | `'hello'.lastIndexOf('l')                       // 3`              |
| `split(separator)`         | Splits string into array                      | `'a,b,c'.split(',')                             // ['a','b','c']`  |
| `replace(old, new)`        | Replaces first match                          | `'hello'.replace('l', 'L')                       // 'heLlo'`       |
| `replaceAll(old, new)`     | Replaces all matches                          | `'hello'.replaceAll('l', 'L')                    // 'heLLo'`       |
| `repeat(n)`                | Repeats the string n times                    | `'ha'.repeat(3)                                 // 'hahaha'`       |
| `match(regex)`             | Returns result of matching regex              | `'abc'.match(/[a-z]/g)                          // ['a','b','c']`  |
| `padStart(n, char)`        | Pads start to length n                        | `'5'.padStart(2, '0')                           // '05'`           | 
| `padEnd(n, char)`          | Pads end to length n                          | `'5'.padEnd(2, '0')                             // '50'`           |
| `toString()`               | Converts value to string                      | `(123).toString()                               // "123"`          |
| `localeCompare()`          | Compares two strings in locale order          | `'a'.localeCompare('b')                         // -1`             |
| `search(regex)`            | Searches string using regex, returns index    | `'abc'.search(/b/)                              // 1`              |
| `concat(...strings)`       | Joins two or more strings                     | `'Hello'.concat(' ', 'World')                   // 'Hello World'`  |
| `codePointAt(index)`       | Returns Unicode code point at a given index   | `'A'.codePointAt(0)                             // 65`             |
| `normalize()`              | Normalizes Unicode strings                    | `'é'.normalize()                                // 'é'`            |
| `valueOf()`                | Returns primitive value of a String object    | `new String('abc').valueOf()                     // 'abc'`         |
| `charCodeAt(index)`        | Returns UTF-16 code unit at a given index     | `'A'.charCodeAt(0)                              // 65`             |
| `repeat(n)`                | Repeats the string n times                    | `'abc'.repeat(2)                                // 'abcabc'`       |
| **Reversing a string**     | No direct method; use split, reverse, join    | `'hello'.split('').reverse().join('')           // 'olleh'`        |
*/


function lengthExample() {
  console.log('length:', 'hello'.length); // 5
}

function charAtExample() {
  console.log('charAt:', 'hello'.charAt(1)); // 'e'
}

function sliceExample() {
  console.log('slice:', 'hello'.slice(1, 4)); // 'ell'
}

function substringExample() {
  console.log('substring:', 'hello'.substring(1, 4)); // 'ell'
}

function substrExample() {
  console.log('substr:', 'hello'.substr(1, 3)); // 'ell'
}

function toUpperCaseExample() {
  console.log('toUpperCase:', 'hello'.toUpperCase()); // 'HELLO'
}

function toLowerCaseExample() {
  console.log('toLowerCase:', 'HELLO'.toLowerCase()); // 'hello'
}

function trimExample() {
  console.log('trim:', '  hello  '.trim()); // 'hello'
}

function includesExample() {
  console.log('includes:', 'hello'.includes('ell')); // true
}

function startsWithExample() {
  console.log('startsWith:', 'hello'.startsWith('he')); // true
}

function endsWithExample() {
  console.log('endsWith:', 'hello'.endsWith('lo')); // true
}

function indexOfExample() {
  console.log('indexOf:', 'hello'.indexOf('l')); // 2
}

function lastIndexOfExample() {
  console.log('lastIndexOf:', 'hello'.lastIndexOf('l')); // 3
}

function splitExample() {
  console.log('split:', 'a,b,c'.split(',')); // ['a', 'b', 'c']
}

function replaceExample() {
  console.log('replace:', 'hello'.replace('l', 'L')); // 'heLlo'
}

function replaceAllExample() {
  console.log('replaceAll:', 'hello'.replaceAll('l', 'L')); // 'heLLo'
}

function repeatExample() {
  console.log('repeat:', 'ha'.repeat(3)); // 'hahaha'
}

function matchExample() {
  console.log('match:', 'abc'.match(/[a-z]/g)); // ['a', 'b', 'c']
}

function padStartExample() {
  console.log('padStart:', '5'.padStart(2, '0')); // '05'
}

function padEndExample() {
  console.log('padEnd:', '5'.padEnd(2, '0')); // '50'
}

function toStringExample() {
  console.log('toString:', (123).toString()); // '123'
}

function localeCompareExample() {
  console.log('localeCompare:', 'a'.localeCompare('b')); // -1
}

function searchExample() {
  console.log('search:', 'abc'.search(/b/)); // 1
}

function concatExample() {
  console.log('concat:', 'Hello'.concat(' ', 'World')); // 'Hello World'
}

function codePointAtExample() {
  console.log('codePointAt:', 'A'.codePointAt(0)); // 65
}

function normalizeExample() {
  console.log('normalize:', 'é'.normalize()); // 'é'
}

function valueOfExample() {
  console.log('valueOf:', new String('abc').valueOf()); // 'abc'
}

function charCodeAtExample() {
  console.log('charCodeAt:', 'A'.charCodeAt(0)); // 65
}

// Reverse string (not a direct method)
function reverseExample() {
  console.log('reverse:', 'hello'.split('').reverse().join('')); // 'olleh'
}

// Call all examples
function runAllExamples() {
  lengthExample();
  charAtExample();
  sliceExample();
  substringExample();
  substrExample();
  toUpperCaseExample();
  toLowerCaseExample();
  trimExample();
  includesExample();
  startsWithExample();
  endsWithExample();
  indexOfExample();
  lastIndexOfExample();
  splitExample();
  replaceExample();
  replaceAllExample();
  repeatExample();
  matchExample();
  padStartExample();
  padEndExample();
  toStringExample();
  localeCompareExample();
  searchExample();
  concatExample();
  codePointAtExample();
  normalizeExample();
  valueOfExample();
  charCodeAtExample();
  reverseExample();
}

runAllExamples();




// | Input                     | Output                     | Hint                                             |
// | ------------------------- | -------------------------- | -------------------------------------------------|
// | "hello"                   | "olleh"                    | reverse the string                               |
// | "Racecar"                 | "true"                     | check palindrome, ignore case                    |
// | "  javascript  "          | "javascript"               | trim whitespace                                  |
// | "react native"            | "React Native"             | capitalize first letter of each word             |
// | "mississippi"             | "4"                        | count occurrences of 's'                         |
// | "hello-world"             | "helloWorld"               | convert kebab-case to camelCase                  |
// | "abc123xyz"               | "abc 123 xyz"              | add space between letters and numbers            |
// | "aabbccdd"                | "abcd"                     | remove consecutive duplicate characters          |
// | "I love JavaScript"       | "I Love JavaScript"        | capitalize first letter only                     |
// | "foobarfoo"               | "bar"                      | remove first and last 'foo'                      |
// | "foo_bar_baz"             | "fooBarBaz"                | convert snake_case to camelCase                  |
// | "aaaaaaa"                 | "a7"                       | compress string by counting repeated chars       |
// | "helloHELLO"              | "hellohello"               | convert all letters to lowercase                 |
// | "lighthouse labs"         | "Lighthouse Labs"          | capitalize first letter of each word             |
// | "apple,banana,grape"      | ["apple","banana","grape"] | split by comma                                   |
// | "hello world"             | "2"                        | count words in a string                          |
// | "javascript"              | "J a v a s c r i p t"      | insert space between each character              |
// | "123abc456"               | "abc"                      | extract only letters                             |
// | "Test123Test"             | "TestTest"                 | remove digits                                    |
// | "the quick brown fox"     | "The Quick Brown Fox"      | capitalize first letter of each word             |
// | "openAI-GPT"              | "openAIGPT"                | remove special characters (like '-')             |
// | "2025Year"                | "Year2025"                 | move numbers to the end                          |
// | "double  spaces"          | "double spaces"            | remove extra spaces                              |
// | "Email@example.com"       | "email@example.com"        | convert to lowercase                             |
// | "find the max char"       | " "                        | find the character with highest frequency        |
// | "123-456-7890"            | "1234567890"               | remove all non-digit characters                  |
// | "Save & Earn"             | "Save And Earn"            | replace '&' with 'And'                           |
// | "my_file_name.js"         | "myFileName.js"            | convert snake_case to camelCase, keep file extension |
// | "  spaced string   "      | "spaced string"            | trim and reduce extra spaces                     |
// | "MyNameIs"                | "my-name-is"               | convert PascalCase to kebab-case                 |
// | "This is a test."         | "This Is A Test."          | capitalize each word and keep punctuation        |
// | "UPPERCASE"               | "uppercase"                | convert to lowercase                             |
// | "mix3dC4se!"              | "mixdCse"                  | remove digits and special characters             |




// Basic Level
// | S.No | Input                     | Output                     | Hint                                              |
// | ---- | ------------------------- | -------------------------- | --------------------------------------------------|
// | 1    | "hello"                   | "olleh"                    | reverse the string                                |
// | 2    | "Racecar"                 | "true"                     | check palindrome, ignore case                     |
// | 3    | "  javascript  "          | "javascript"               | trim whitespace                                   |
// | 4    | "helloHELLO"              | "hellohello"               | convert all letters to lowercase                  |
// | 5    | "UPPERCASE"               | "uppercase"                | convert to lowercase                              |
// | 6    | "Email@example.com"       | "email@example.com"        | convert to lowercase                              |
// | 7    | "apple,banana,grape"      | ["apple","banana","grape"] | split by comma                                    |
// | 8    | "123-456-7890"            | "1234567890"               | remove all non-digit characters                   |

// Intermediate Level
// | S.No | Input                     | Output                     | Hint                                              |
// | ---- | ------------------------- | -------------------------- | --------------------------------------------------|
// | 1    | "react native"            | "React Native"             | capitalize first letter of each word              |
// | 2    | "mississippi"             | "4"                        | count occurrences of 's'                          |
// | 3    | "hello-world"             | "helloWorld"               | convert kebab-case to camelCase                   |
// | 4    | "abc123xyz"               | "abc 123 xyz"              | add space between letters and numbers             |
// | 5    | "aabbccdd"                | "abcd"                     | remove consecutive duplicate characters           |
// | 6    | "foobarfoo"               | "bar"                      | remove first and last 'foo'                       |
// | 7    | "foo_bar_baz"             | "fooBarBaz"                | convert snake_case to camelCase                   |
// | 8    | "aaaaaaa"                 | "a7"                       | compress string by counting repeated chars        |
// | 9    | "hello world"             | "2"                        | count words in a string                           |
// | 10   | "javascript"              | "J a v a s c r i p t"      | insert space between each character               |
// | 11   | "123abc456"               | "abc"                      | extract only letters                              |
// | 12   | "Test123Test"             | "TestTest"                 | remove digits                                     |
// | 13   | "double  spaces"          | "double spaces"            | remove extra spaces                               |
// | 14   | "Save & Earn"             | "Save And Earn"            | replace '&' with 'And'                            |
// | 15   | "find the max char"       | " "                        | find the character with highest frequency         |

// Advanced Level
// | S.No | Input                     | Output                     | Hint                                              |
// | ---- | ------------------------- | -------------------------- | --------------------------------------------------|
// | 1    | "I love JavaScript"       | "I Love JavaScript"        | capitalize first letter only                      |
// | 2    | "my_file_name.js"         | "myFileName.js"            | convert snake_case to camelCase, keep extension   |
// | 3    | "  spaced string   "      | "spaced string"            | trim and reduce extra spaces                      |
// | 4    | "MyNameIs"                | "my-name-is"               | convert PascalCase to kebab-case                  |
// | 5    | "This is a test."         | "This Is A Test."          | capitalize each word and keep punctuation         |
// | 6    | "openAI-GPT"              | "openAIGPT"                | remove special characters (like '-')              |
// | 7    | "2025Year"                | "Year2025"                 | move numbers to the end                           |
// | 8    | "mix3dC4se!"              | "mixdCse"                  | remove digits and special characters              |





// Basic Level
// | S.No | Input                     | Output                     | Hint                                              |
// | ---- | ------------------------- | -------------------------- | --------------------------------------------------|
// | 1    | "hello"                   | "olleh"                    | reverse the string                                |
// | 2    | "Racecar"                 | "true"                     | check palindrome, ignore case                     |
// | 3    | "  javascript  "          | "javascript"               | trim whitespace                                   |
// | 4    | ("banana", "a")           | 3                          | count occurrences of a character                  |
// | 5    | "Hello World"             | 3                          | count vowels                                      |
// | 6    | "hello world from react"  | "Hello World From React"   | convert string to title case                      |
// | 7    | "hello"                   | "Hello"                    | capitalize first letter                           |
// | 8    | " H e l l o "             | "Hello"                    | remove all spaces                                 |
// | 9    | ("Hello World", "Hello")  | true                       | check if string starts with substring             |
// | 10   | ("Hello World", "World")  | true                       | check if string ends with substring               |
// | 11   | ("JavaScript", 4, 10)     | "Script"                   | extract substring between two indices             |
// | 12   | "123"                     | Number: 123, String: "123" | convert string to number and back to string       |

// Intermediate Level
// | 13   | "JavaScript is awesome"   | "JavaScript"               | find the longest word                             |
// | 14   | ("listen", "silent")      | true                       | check if two strings are anagrams                 |
// | 15   | "banana"                  | "ban"                      | remove duplicate characters                       |
// | 16   | "camelCaseString"         | "camel_case_string"        | convert camelCase to snake_case                   |
// | 17   | "Hello world, how are you?" | 5                         | count number of words                            |
// | 18   | "Loving #JavaScript and #ReactNative!" | ["#JavaScript", "#ReactNative"] | extract all hashtags            |
// | 19   | "Hello! How are you?"     | "HelloHowareyou"           | remove all non-alphanumeric characters            |
// | 20   | ("apple apple apple", "apple", "orange") | "orange orange orange" | replace all occurrences of substring   |
// | 21   | ("foo bar foo baz foo", "foo") | 3                       | count how many times a word appears             |
// | 22   | "kebab-case-string"       | "kebabCaseString"          | convert kebab-case to camelCase                   |
// | 23   | "abc123def45gh6"          | ["123", "45", "6"]         | find all numbers in a string                      |
// | 24   | "12345"                   | true                       | check if string contains only digits              |
// | 25   | "Hello World!"            | 2                          | count number of uppercase letters                 |
// | 26   | ("HelloWorld", " ", 5)    | "Hello World"              | insert substring at given position                |

// Advanced Level
// | 27   | "Hello World! This is React Native" | "hello-world-this-is-react-native" | convert string to URL slug      |
// | 28   | ("The quick brown fox", 3) | 3                         | count number of words with length > N             |
// | 29   | ("pale", "bale")          | true                       | check if two strings differ by one edit           |
// | 30   | "aaabbcc"                 | "a3b2c2"                   | compress string by counts (run-length encoding)   |
