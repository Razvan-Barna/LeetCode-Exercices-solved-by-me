// 283. Move Zeroes
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

const moveZeroes = function(nums) {

    let l = nums.length;
    let m=[];
    let count = 0;

    for(i=0; i<l; i++){
        if(nums[i] !== 0){
            
            m.push(nums[i]);
        }else{
            count++
        }

    }
    console.log('Câți de zero avem:',count)
    for(i=0; i<count; i++){
        m.push(0)
    }
    return m;

};

console.log('Rezultatul este:',moveZeroes([0,1,0,3,12]));  // The result is [ 1, 3, 12, 0, 0 ]