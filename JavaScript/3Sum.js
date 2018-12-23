// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
//
// Note:
//
// The solution set must not contain duplicate triplets.
//
// Example:
//
// Given array nums = [-1, 0, 1, 2, -1, -4],
//
// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

var threeSum = function(nums) {
    nums.sort((a,b) => a-b)
    let finalArr = [];
    for(let i=0; i + 2 < nums.length; i++){
        if(i > 0 && nums[i] === nums[i - 1]) continue;

        let j = i+1;
        let k = nums.length -1;
        let diff = -(nums[i]);

        while(j < k){
            let sum = nums[k] + nums[j]
            if (sum === diff){
                finalArr.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
                while (nums[j] === nums[j-1]) j++ 
                while (nums[k] === nums[k + 1])k--

            } else if (sum < diff){
                j++

            } else if (sum > diff){
                k--
            }

        }
    }

    return finalArr
};
