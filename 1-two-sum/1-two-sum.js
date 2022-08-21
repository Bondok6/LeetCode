/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // [3 , 2 , 4] target = 6
    // 6 - 3 = 2 Is 2 in obj? No, then add it as property in the object and the value equal the index
    // yes, then return obj[2], 3
    
    let mapObj = {};
    
    for(let i = 0; i < nums.length; i++){
        if(target - nums[i] in mapObj){
            return [mapObj[target - nums[i]], i];
        }else{
            mapObj[nums[i]] = i;
        }
    }
};