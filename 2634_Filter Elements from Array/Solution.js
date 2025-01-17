/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
function filter(arr, fn) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

// Example 1
const arr1 = [0, 10, 20, 30];
const greaterThan10 = function (n) { return n > 10; };
console.log(filter(arr1, greaterThan10)); // Output: [20, 30]

// Example 2
const arr2 = [1, 2, 3];
const firstIndex = function (n, i) { return i === 0; };
console.log(filter(arr2, firstIndex)); // Output: [1]

// Example 3
const arr3 = [-2, -1, 0, 1, 2];
const plusOne = function (n) { return n + 1; };
console.log(filter(arr3, plusOne)); // Output: [-2, 0, 1, 2]
