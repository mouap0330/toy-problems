/*
Write a function called "removeEvenValues".

Given an object, "removeEvenValues" removes any properties whose values are even numbers.

Do this in place and return the original object, do not construct a cloned object that omits the properties.

Example:
*/

function removeEvenValues(obj) {
  for (var x in obj) {
    if (obj[x] % 2 === 0) {
      delete obj[x];
    }
  }
  return obj[x];
}

var obj = {
  a: 2,
  b: 3,
  c: 4
};
removeEvenValues(obj);
console.log(obj); // --> { b: 3 }
