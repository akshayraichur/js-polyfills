// Implementing a reduce function on Array methods.
Array.prototype.myReduce = function (callbackFn, initialValue) {
  if (arguments.length < 2) {
    initialValue = this[0];
  }

  let acc = initialValue;

  let i = 0;
  if (arguments.length < 2) {
    // meaning: if there is no initial value, the 1st index of array is taken in acc, so we will be iterating from 2nd.
    i = 1;
  }

  // callback function takes, (acc, curr, index, array)
  for (; i < this.length; i++) {
    acc = callbackFn(acc, this[i], i, this);
  }

  return acc;
};

// Tests:
// ip: [1,2,3,4] op: 10
let testOneResult = [1, 2, 3, 4].myReduce((acc, curr, index, arr) => {
  acc += curr;
  return acc;
});
console.log(testOneResult);

console.log("----------");

// ip: [{count: 10}, {count: 11}, {count: 12}] op: 33
let testTwoResult = [{ count: 10 }, { count: 11 }, { count: 12 }].myReduce((acc, { count }, index, arr) => {
  acc += count;
  return acc;
}, 0);

console.log(testTwoResult);

console.log("----------");

// finding average
const euros = [29.76, 41.85, 46.5];

const average = euros.myReduce((total, amount, index, array) => {
  total += amount;
  if (index === array.length - 1) {
    return total / array.length;
  } else {
    return total;
  }
});
console.log(average);

console.log("----------");

// test 4
// ip: [29.76, 41.85, 46.5] op: 118.11
console.log(
  euros.myReduce((acc, curr) => {
    acc += curr;
    return acc;
  })
);
