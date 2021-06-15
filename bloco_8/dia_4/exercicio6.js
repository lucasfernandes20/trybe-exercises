const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function soma(acc, curr) {
    return acc + curr;
};

function media(index) {
    const sum = grades[index].reduce(soma, 0);

    return sum / grades[index].length;
};

function studentAverage() {
  return students.reduce((acc, curr, index) => {
      const objeto = {
          name: curr,
          average: media(index),
      };
      acc.push(objeto)
      return acc;
  }, []);
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(), expected);