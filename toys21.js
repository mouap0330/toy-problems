
/*
Write a function called "equalsTen".
Given a number, "equalsTen" returns whether or not the given number is 10.
var output = equalsTen(9);
console.log(output); // --> false
*/

var output = equalsTen(10);
function equalsTen(num) {
  return num === 10 ? true : false;
}
console.log(output); // --> false
