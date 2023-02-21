// 485. Max Consecutive Ones
// Given a binary array nums, return the maximum number of consecutive 1's in the array.

var findMaxConsecutiveOnes = function(nums) {
    let l = nums.length;
    let count = 0;
    let result = 0;

    for(i=0; i<l; i++){
        if(nums[i] === 0) {
            count = 0;
        }else{
            count++
            result = Math.max(result, count);
        }
    }
    return result;
};

console.log('Rezultatul este:',findMaxConsecutiveOnes([1,1,0,1,1,1]));  // The result will be: 3