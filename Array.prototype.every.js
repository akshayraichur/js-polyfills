/**
 * every is a method on array which takes in a callback and verifies a certain test which is satisfied by every element or not.
 * returns a bool
 */

Array.prototype.myEvery = function (callback) {
  if (!Array.isArray(this) || this === undefined || this === null) {
    throw TypeError('Type Error');
  }

  if (typeof callback !== 'function') {
    throw TypeError(`${callback} paramter is not a function`);
  }

  for (let i = 0; i < this.length; i++) {
    let value = callback(this[i]);
    if (!value) return false;
  }

  return true;
};

let arr = [1, 2, 3, 4, 4, 5, 50];

const isBelow = (val) => val < 20;

console.log(arr.myEvery(isBelow));
