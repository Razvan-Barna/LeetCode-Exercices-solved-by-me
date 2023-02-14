// 58. Length of Last Word
// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.


var lengthOfLastWord = function(s) {
    
    let x = s.trim().split(" ")
    console.log(x)
    
    return x[x.length - 1].length
};

console.log(lengthOfLastWord("Hello World"))  // The result will be 5.
