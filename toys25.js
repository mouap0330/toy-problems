/*
Write a function called "isEven".
Given a number, "isEven" returns whether it is even.
*/

var output = isEven(11);
function isEven(num) {
  return num % 2 === 0 ? true : false;
}
console.log(output); // --> false
