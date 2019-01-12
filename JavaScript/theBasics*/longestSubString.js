var lengthOfLongestSubstring = function(s) {
    if(s === "")return 0;
    let longestString = 0;
    let obj = {};

    for(let i=0, j=0; j < s.length; j++){
        if(obj[s[j]]){
            i = Math.max(obj[s[j]], i);
        }
            longestString = Math.max(j-i + 1,  longestString)
            obj[s[j]] = j + 1
    }

    return longestString;
};
