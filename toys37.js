/*
Write a function called "computeAverageLengthOfWords".
Given two words, "computeAverageLengthOfWords" returns the average of their lengths.
*/

var output = computeAverageLengthOfWords('code', 'programs');
function computeAverageLengthOfWords(word1, word2) {
  return (word1.length + word2.length) / 2;
}
console.log(output); // --> 6
