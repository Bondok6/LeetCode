/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let mapObj = {};
    
    for(let i = 0; i < nums.length; i++){
        if(target - nums[i] in mapObj){
            return [mapObj[target - nums[i]], i];
        }else{
            mapObj[nums[i]] = i;
        }
    }
};