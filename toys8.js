/*
Write a function called "isOldEnoughToDrink".
Given a number, in this case an age, "isOldEnoughToDrink" returns whether a person of this given age is old enough to legally drink in the United States.
Notes:
* The legal drinking age in the United States is 21.
var output = isOldEnoughToDrink(22);
console.log(output); // --> true
*/

var output = isOldEnoughToDrink(18);

function isOldEnoughToDrink(age) {
  return age >= 21 ? true : false;
}
console.log(output);
