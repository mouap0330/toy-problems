/*
Write a function called "removeNumbersLargerThan".

Given a number and an object, "removeNumbersLargerThan" removes any properties whose values are numbers greater than the given number.
*/

function removeNumbersLargerThan(num, obj) {
  for (var x in obj) {
    if (obj[x] > num) {
      delete obj[x];
      return obj;
    }
  }
}

var obj = {
  a: 8,
  b: 2,
  c: 'montana'
}
removeNumbersLargerThan(5, obj);
console.log(obj); // --> { b: 2, c: 'montana' }
