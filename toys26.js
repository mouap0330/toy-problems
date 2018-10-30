/*
Write a function called "isOdd".
Given a number, "isOdd" returns whether the given number is odd.
*/

var output = isOdd(9);
function isOdd(num) {
  return num % 2 ? true : false;
}
console.log(output); // --> true
