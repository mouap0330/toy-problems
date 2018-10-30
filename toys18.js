/*
Write a function called "getLengthOfTwoWords".
Given 2 words, "getLengthOfTwoWords" returns the sum of their lengths.
var output = getLengthOfTwoWords('some', 'words');
console.log(output); // --> 9
*/

var output = getLengthOfTwoWords('some', 'words');
function getLengthOfTwoWords(word1, word2) {
  var length = word1.length;
  length += word2.length;
  return length;
}
console.log(output); // --> 9
