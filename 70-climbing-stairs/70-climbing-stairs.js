/**
 * @param {number} n
 * @return {number}
 */

// const wayToClimb = (stepsTaken, n) => {
//   if (stepsTaken > n) return 0;

//   if (stepsTaken === n) return 1;
 
//   return wayToClimb(stepsTaken + 1, n) + wayToClimb(stepsTaken + 2, n);
// };

// const climbStairs = (n) => wayToClimb(0, n);


var climbStairs = function (n) {
    
    if (n === 1) return 1;
    if (n === 2) return 2;

    let waysToClimb1 = 1;
    let waysToClimb2 = 2;
    let waysToClimb;
    let i = 1;

    while (n - 1 > i) {
      waysToClimb = waysToClimb2 + waysToClimb1;
      waysToClimb1 = waysToClimb2;
      waysToClimb2 = waysToClimb;
      i++;
    }

    return waysToClimb;
}