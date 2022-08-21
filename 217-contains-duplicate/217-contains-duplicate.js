/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // Worst Case Brute Force O(n2)

    for(let i = 0; i < nums.length; i++){
      let count = 0;
        for(let j = 0; j <nums.length; j++){
            if(nums[i] == nums[j]){
                count++;
            }
        }
      if(count > 1) return true;
    }
    
    
    return false
};