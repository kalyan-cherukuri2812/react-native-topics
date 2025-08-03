const SumofNumbers = ip => {
  const op = ip.reduce((acc, cur) => acc + cur, 0);
  return op;
};

const productOfNumbers = ip => {
  const op = ip.reduce((acc, cur) => acc * cur, 1);
  return op;
};

const findMaximumValue = ip => {
  const op = ip.reduce((acc, cur) => (acc < cur ? cur : acc), 0);
  return op;
};
const findmaxLengthOfString = ip => {
  const op = ip
    .split(' ')
    .reduce((acc, cur) => (acc.length < cur.length ? cur : acc), '');
  return op;
};

const groupByProperty = ip => {
  const op = ip.reduce((acc, cur) => {
    const key = cur.type;
    if (!acc[key]) acc[key] = [];
    acc[key] = [...acc[key], cur];
    return acc;
  }, {});
  return op;
};

const removeDuplicates = ip => {
  const op = ip.reduce(
    (acc, cur) => (acc.includes(cur) ? acc : [...acc, cur]),
    [],
  );
  return op;
};
const FlattenAnArray = ip => {
  const op = ip.reduce((acc, cur) => {
    return (acc = [...acc, ...cur]);
  }, []);
  return op;
};
export {
  SumofNumbers, //     [1, 2, 3, 4, 5]=>15
  productOfNumbers, // [1, 2, 3, 4]=>24
  findMaximumValue, //[5, 12, 8, 130, 44] => 130
  findmaxLengthOfString, // Java JavaScript React ReactNative => ReactNative
  groupByProperty, //[{ type: 'fruit', name: 'apple' },{ type: 'vegetable', name: 'carrot' },{ type: 'fruit', name: 'banana' }] ==> {fruit: [ { name: 'apple' }, { name: 'banana' } ],vegetable: [ { name: 'carrot' } ]}
  removeDuplicates, // [1, 2, 2, 3, 4, 4, 5]=> [ 1, 2, 3, 4, 5 ]
  FlattenAnArray, //  [[1, 2], [3, 4], [5]] =>[ 1, 2, 3, 4, 5 ]
};
