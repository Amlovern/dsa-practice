/*

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

*/

// Really naive solution (O(n^2) time complexity)
// const twoSum = (nums, target) => {
//     for (let i = 0; i < nums.length; i++) {
//         let num1 = nums[i];
//         for (let j = i+1; j < nums.length; j++) {
//             let num2 = nums[j];
//             if (num1 + num2 === target) return [i, j];
//         };
//     };

//     return [];
// };

// hash solution (O(n) time complexity)
const twoSum = (nums, target) => {
    const hash = {};
    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]] === undefined) hash[nums[i]] = [i];
        else hash[nums[i]].push(i)
    };
    for (let key in hash) {
        if (key * 2 == target) {
            return [hash[key][0], hash[key][1]]
        } else if (hash[target - key]) {
            return [hash[key][0], hash[(target - key)][0]];
        }
    };
};

console.log(twoSum([3,2,4], 6))