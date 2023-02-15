// 268. Missing Number
// Given an array nums containing n distinct numbers in the range [0, n],
// return the only number in the range that is missing from the array.

var missingNumber = function(nums) {
    let l = nums.length;
    
    for (i=0; i<=l; i++) {

        console.log('asta este',i)

        if (nums.indexOf(i) === -1) {

          return i;
        }
    }
}

console.log('Acesta este numarul care lipseste:',missingNumber([3,0,1]))  // The result will be 2
