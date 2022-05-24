/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const output = []
    for(let i = 1; i <= n; i++){
        if (i%3 == 0 && i%5 == 0) output.push('FizzBuzz')
        else if (i%5 == 0) output.push('Buzz')
        else if (i%3 == 0) output.push('Fizz')
        else output.push(String(i))
    }
    
    return output
};