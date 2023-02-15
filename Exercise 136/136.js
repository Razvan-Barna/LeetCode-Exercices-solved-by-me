// 136. Single Number
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

var singleNumber = function(nums) {
    let l = nums.length
    let sort = nums.sort()
    console.log('array-ul sortat',sort)

    for (i=0; i<l; i++){
        if(sort[i-1] !== sort[i] && sort[i+1] !== sort[i])

        return sort[i]
    }

    return nums
};

console.log('Numarul singur este:',singleNumber([2,2,1]));  // The result will be 1