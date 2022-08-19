/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return "";
    
    let lcp = strs[0];
    
    for(let i = 1; i < strs.length; i++){
        let currentWord = strs[i];
        let j = 0;
        
        while(j < currentWord.length && j < currentWord.length && currentWord.charAt(j) === lcp.charAt(j)){
            j++;
        }
        
        if(j === 0) return "";
        
        lcp = currentWord.substring(0,j)
    }
    
    return lcp;
};