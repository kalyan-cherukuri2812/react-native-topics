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

export {
  reverseAString, //hello => olleh
  Palindrome, //Racecar => true
  vowelsCount, //Hello World => 3
  toTitleCase, //hello world from react => Hello World From React
};
