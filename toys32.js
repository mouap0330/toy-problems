/*
Write a function called "isEvenAndGreaterThanTen".
Given a number, "isEvenAndGreaterThanTen" returns whether it is both even and greater than 10.
*/

var output = isEvenAndGreaterThanTen(13);
function isEvenAndGreaterThanTen(num) {
  return (num > 10 && num %2 === 0) ? true : false;
}
console.log(output); // --> false
