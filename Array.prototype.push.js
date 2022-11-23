/**
 * This is a polyfill of Array.prototupe.push method.
 *
 * This function takes a single element or multiple elements and appends it into the array, and returns the new length of the array
 */

Array.prototype.myPush = function (...args) {
  if (!Array.isArray(this)) throw TypeError();

  let elements = [...args];
  let appendLength = elements.length;

  let currArrLen = this.length;

  for (let i = 0; i < appendLength; i++) {
    this[currArrLen] = elements[i];
    currArrLen++;
  }

  this.length = currArrLen;

  return this.length;
};

// Examples

let arr = [1, 2, 3, 4];

arr.myPush(5);

console.log(arr, arr.length); // [1,2,3,4,5] 5

arr.myPush(6, 7, 8, 9, 10);

console.log(arr, arr.length); // [1,2,3,4,5,6,7,8,9,10] 10
