/*
Write a function called "removeNumbersLessThan".

Given a number and an object, "removeNumbersLessThan" removes any properties whose values are numbers greater than the given number.
*/

function removeNumbersLessThan(num, obj) {
  for (var x in obj) {
    if (obj[x] < num) {
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
removeNumbersLessThan(5, obj);
console.log(obj); // --> { b: 2, c: 'montana' }
