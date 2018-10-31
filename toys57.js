
/*
Write a function called "computeSquareRoot".
Given a number, "computeSquareRoot" returns its square root.

Do not use Math.sqrt(); for this problem. Instead, use this iterative way of solving the problem:

https://blogs.sas.com/content/iml/2016/05/16/babylonian-square-roots.html
*/

function computeSquareRoot(num) {
  var value = '';
  // check if num is negative
  // if num is negative
  if (num < 0) {
    value = 'cannot compute square root of a negative value';
    return value;
  } else if (num === 0) {
    value = 'square root of 0 is 0';
    return value;
  } else {
    var squareRoot = num/2;
    var tempValue = squareRoot;

    squareRoot = (tempValue + (num/squareRoot))/2;
    return Math.floor(squareRoot);
  }
}
var output = computeSquareRoot(9);
console.log(output); // --> 3
