/*
Write a function called "isEitherEven".
Given two numbers, "isEitherEven" returns whether or not either one of the given numbers is even.
*/

var output = isEitherEven(1, 4);
function isEitherEven(num1, num2) {
  return (num1 % 2 === 0 || num2 % 2 === 0) ? true : false;
}
console.log(output); // --> true
