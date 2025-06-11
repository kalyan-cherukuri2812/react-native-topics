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

export {
  reverseAString, //hello => olleh
  Palindrome, //Racecar => true
  vowelsCount, //Hello World => 3
};
