/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // Worst Case Brute Force O(n2) space O(1)

//     for(let i = 0; i < nums.length; i++){
//       let count = 0;
//         for(let j = 0; j <nums.length; j++){
//             if(nums[i] == nums[j]){
//                 count++;
//             }
//         }
//       if(count > 1) return true;
//     }
    
//     return false
    
    // Second solution: Sorting O(n) or O(nlogn) because of sort() space O(1)
//     const sortedArr = nums.sort();
//     console.log(sortedArr)
//     for(let i = 0; i < sortedArr.length; i++){
//         if(sortedArr[i] == sortedArr[i+1]) return true;
//     }
    
//     return false;
    
    // Third solution: Set
    const numSet = new Set();
    for(let i =0; i < nums.length; i++){
        if(numSet.has(nums[i])) return true;
        numSet.add(nums[i]);
    }
    
    return false;
};