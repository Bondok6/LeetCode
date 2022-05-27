var romanToInt = function(s) {
    const dic = {I: 1, V: 5, X: 10, L: 50, C:100, D: 500, M:1000};
    let res = 0;
    s.split('').forEach((el,ind) =>{
        if(dic[el] < dic[s[ind + 1]]) res -= dic[el];
        else res += dic[el];
    });
    return res;
};