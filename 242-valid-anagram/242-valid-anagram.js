/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
     
    if(s.length !== t.length) return false;
    
    let sObj = {};
    let tObj = {};
    
    for (let i = 0; i < s.length; i++) {
        
        if (sObj.hasOwnProperty(s[i])) sObj[s[i]]++;
        else sObj[s[i]] = 1;
        
        if (tObj.hasOwnProperty(t[i])) tObj[t[i]]++;
        else tObj[t[i]] = 1;
    }
    
    
    for (let k in sObj) {
        if (sObj[k] !== tObj[k]) return false;
    }
    
    return true;
};