const reverseAString = i => {
  const res = i
    .split('')
    .map((e, i, a) => a[a.length - (i + 1)])
    .join('');
  return res;
};

const Palindrome = ip => {
  const ipToLowerCase = ip.toLowerCase();
  const revStr = ipToLowerCase.split('').reverse().join('');
  return ipToLowerCase == revStr;
};

const vowelsCount = ip => {
  const ip = 'Hello World';
  const vowels = 'aeiou';
  let count = 0;
  ip.toLowerCase()
    .split('')
    .forEach(e => (vowels.includes(e) ? count++ : count));
  return count;
};

const toTitleCase = ip => {
  const op = ip
    .split(' ')
    .map(e => e[0].toUpperCase() + e.slice(1))
    .join(' ');
  return op;
};

const removeAllSpaces = ip => {
  const op = ip.split(' ').join('');
  return op;
};
const removeNonDigitChar = ip => {
  const isNumber = c => /[0-9]/.test(c);
  const op = ip
    .split('')
    .map(e => (isNumber(e) ? e : ''))
    .join('');
  return op;
};

const convertSnakeCaseToCamelCase = ip => {
  const op = ip
    .split('_')
    .map((e, i) => (i == 0 ? e : e[0].toUpperCase() + e.slice(1)))
    .join('');
  return op;
};

const camelCaseToTitleCase = ip => {
  const op = ip
    .split('')
    .map((e, i) => {
      return i == 0 ? e.toUpperCase() : e == e.toUpperCase() ? ' ' + e : e;
    })
    .join('');
  return op;
};
const removeDuplicateChar = ip => {
  let uniChar = '';
  ip.split('').forEach(e =>
    !uniChar.includes(e) ? (uniChar = uniChar + e) : '',
  );
  return uniChar;
};

const removeDigitsAndSpecialCharacters = ip => {
  const isChar = c => /[a-zA-Z]/.test(c);
  const op = ip
    .split('')
    .map(e => (isChar(e) ? e : ''))
    .join('');
  return op;
};

export {
  reverseAString, //hello => olleh
  Palindrome, //Racecar => true
  vowelsCount, //Hello World => 3
  toTitleCase, //hello world from react => Hello World From React
  removeAllSpaces, //" H e l l o " => "Hello"
  removeNonDigitChar, // 123-456-7890 => 1234567890
  convertSnakeCaseToCamelCase, //foo_bar_baz => fooBarBaz
  camelCaseToTitleCase, //fooBarBaz => Foo Bar Baz
  removeDuplicateChar, //aa$$2wwewwsd!@@!!000jfjdhyusj => a$2wesd!@0jfhyu
  removeDigitsAndSpecialCharacters, //mix3dC4se! => mixdCse
};
