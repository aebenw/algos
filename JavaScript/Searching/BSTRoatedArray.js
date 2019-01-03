// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
//
// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
//
// You are given a target value to search. If found in the array return its index, otherwise return -1.
//
// You may assume no duplicate exists in the array.
//
// Your algorithm's runtime complexity must be in the order of O(log n).
//
// Example 1:
//
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:
//
// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1

var search = function(nums, target) {
    if(nums.length === 1){
        return nums[0] === target ? 0 : -1
    }

    let mid;
    let start = 0;
    let end = nums.length -1;

    while (start < end){
        mid = Math.round((start + end) /2)

        if (target === nums[mid]) return mid;
        if (target === nums[start]) return start;
        if (target === nums[end]) return end;
        if(nums[start] < nums[mid]){
            if(target > nums[mid] && target > nums[start]){
                start = mid + 1;
            } else if(target > nums[mid] && target < nums[start]){
                end = mid -1;

            } else if (target < nums[mid] && target > nums[start]){
                end = mid -1;
            } else if (target < nums[mid] && target < nums[start]){
                start = mid + 1;
            }
        } else {
            if(target > nums[mid] && target < nums[start]){
                start = mid + 1;
            } else if (target > nums[mid] && target > nums[start]){
                end = mid -1;
            } else if (target < nums[mid] && target < nums[start]){
                end = mid -1;
            } else if (target < nums[mid] && target > nums [start]){
                start = mid + 1
            }
        }
    }
        return -1;



};


//**********Beats 100% but seems a bit verbose - below is succinct answer from discussion **********//
// All but the right condition is exactly the same as in the Cracking The Code Interview Binary Search sample code.
//
// How to know when the value is located on the right side:
//
// <low> <mid> <high>
// Descending condition: 4 7 2, target 0 (i.e. [4,5,6,7,0,1,2])
//
// We are looking for values that are over 7 and less/eq than 2.
// const descendingCondition = target >= nums[mid] || target <= nums[high];
// Ascending condition: 0 1 2, target = 2 (i.e. [0 1 2 3 4 5 6])
//
// We are looking for values that are within 1 and 2 (2 included).
// const ascendingCondition = target >= nums[mid] && target <= nums[high];
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// var search = function(nums, target) {
//     let low = 0;
//     let high = nums.length - 1;
//     while (low <= high) {
//         const mid = Math.floor((high - low) / 2) + low;
//
//         // <low> <mid> <high>
//         // Descending condition: 4 7 2, target 0
//         // - We are looking for values that are over 7 and less/eq than 2.
//         // Ascending condition: 0 1 2, target = 2
//         // - We are looking for values that are within 1 and 2 (2 included).
//         const descendingCondition = target >= nums[mid] || target <= nums[high];
//         const ascendingCondition = target >= nums[mid] && target <= nums[high];
//         const isRight = nums[high] - nums[mid] >= 0 ? ascendingCondition : descendingCondition;
//
//         if (nums[mid] === target) {
//             return mid;
//         } else if (isRight) {
//             low = mid + 1;
//         } else {
//             high = mid - 1;
//         }
//     }
//
//     return -1;
// };
