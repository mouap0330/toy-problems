/*
Write a function called "getFirstElement".
Given an array, "getFirstElement" returns the first element of the given array.
Notes:
* If the given array has a length of 0, it should return undefined.
*/

var output = getFirstElement([1, 2, 3, 4, 5]);
function getFirstElement(array) {
  if (array.length === 0) {
    return undefined;
  } else {
    return array[0];
  }
}
console.log(output); // --> 1
