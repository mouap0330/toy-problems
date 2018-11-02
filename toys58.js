/*
Write a function called "doubleSquareRootOf".
Given a number, "doubleSquareRootOf" returns double its square root.
*/

function doubleSquareRootOf(num) {
  var value = '';
  if (num < 0) {
    value = 'cannot comput square root of negative number';
    return value;
  } else if (num === 0) {
    value = 'square root of 0 is ' + num;
    return value;
  } else {
    var squareRoot = num/2;
    var tempValue = squareRoot;
    squareRoot = (tempValue + (num/squareRoot))/2;
    return Math.floor(squareRoot * 2);
  }
}
var output = doubleSquareRootOf(121);
console.log(output); // --> 22
