/*
Write a function called "removeOddValues".

Given an object, "removeOddValues" removes any properties whose valuse are odd numbers.
*/

function removeOddValues(obj) {
  for (var keys in obj) {
    if (obj[keys] % 2 !== 0) {
      delete obj[keys];
    }
  }
}

var obj = {
  a: 2,
  b: 3,
  c: 4
};
removeOddValues(obj);
console.log(obj); // --> { a: 2, c: 4 }
