/*
Write a function called "isOddLength".
Given a word, "isOddLength" returns whether the length of the given word is odd.
*/

var output = isOddLength('special');
function isOddLength(word) {
  return (word.length % 2) ? true : false;
}
console.log(output); // --> true
