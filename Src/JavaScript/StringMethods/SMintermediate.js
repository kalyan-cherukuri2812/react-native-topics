const compressStringByCountingRepeatedChars = ip => {
  let res = '';
  let count = 1;
  ip.split('').forEach((e, i, a) => {
    if (e == a[i + 1]) {
      count++;
    } else {
      res = res + e + count.toString();
      count = 1;
    }
  });
  return res;
};

const addSpcBtwLtrsAndNums = ip => {
  const isNum = c => /[0-9]/.test(c);
  const isChar = c => /[a-zA-z]/.test(c);
  const op = ip
    .split('')
    .map((e, i, a) => {
      if (isChar(e)) {
        if (isNum(a[i + 1])) {
          return e + ' ';
        } else return e;
      } else if (isNum(e)) {
        if (isChar(a[i + 1])) {
          return e + ' ';
        } else return e;
      }
    })
    .join('');
  return op;
};

const charRepeatDecode = ip => {
  const isChar = c => /[a-zA-Z]/.test(c);
  const isNum = c => /[0-9]/.test(c);
  let res = '';
  let repValue = '';
  let eChar = '';
  ip.split('').forEach((e, i, a) => {
    if (!isNum(e)) {
      eChar = e;
    } else {
      repValue = repValue + e;
      if (!isNum(a[i + 1])) {
        res = res + eChar.repeat(repValue);
        repValue = '';
      }
    }
  });
  return res;
};
export {
  compressStringByCountingRepeatedChars, //aabbbcccc => a2b3c4
  addSpcBtwLtrsAndNums, //abc123xyz => abc 123 xyz
  charRepeatDecode, //@5Q2D3s4 => @@@@@QQDDDssss
};
