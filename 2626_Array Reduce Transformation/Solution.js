/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
function reduce(nums, fn, init) {
    let val = init; // Initialize the result with the initial value
    for (let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i]); // Apply the reducer function
    }
    return val;
}

// Example 1
const nums1 = [1, 2, 3, 4];
const sum = function (accum, curr) { return accum + curr; };
const init1 = 0;
console.log(reduce(nums1, sum, init1)); // Output: 10

// Example 2
const nums2 = [1, 2, 3, 4];
const sumOfSquares = function (accum, curr) { return accum + curr * curr; };
const init2 = 100;
console.log(reduce(nums2, sumOfSquares, init2)); // Output: 130

// Example 3
const nums3 = [];
const constant = function (accum, curr) { return 0; };
const init3 = 25;
console.log(reduce(nums3, constant, init3)); // Output: 25
