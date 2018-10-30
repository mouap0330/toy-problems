/*
Write a function called "isSameLength".
Given two words, "isSameLength" returns whether the given words have the same length.
*/

var output = isSameLength('words', 'super');
function isSameLength(word1, word2) {
 return word1.length === word2.length ? true : false;
}
console.log(output); // --> true
