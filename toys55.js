/*
Write a function called "computeAreaOfACircle".
Given the radius of a circle, "computeAreaOfACircle" returns its area.
Reference:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI
*/

function computeAreaOfACircle(radius) {
  return (Math.pow(radius,2)) * Math.PI;
}
var output = computeAreaOfACircle(4);
console.log(output); // --> 50.26548245743669