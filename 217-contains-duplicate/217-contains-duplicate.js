/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // Third solution: using Set()  time O(n) and space O(n)
    const numSet = new Set();
    for(let i =0; i < nums.length; i++){
        if(numSet.has(nums[i])) return true;
        numSet.add(nums[i]);
    }
    return false;
};