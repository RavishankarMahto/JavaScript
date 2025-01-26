/**
 * @param {Array} arr - Multi-dimensional array to flatten
 * @param {number} n - Depth up to which to flatten the array
 * @return {Array} - Flattened array
 */
function flatten(arr, n) {
    // Recursive helper function to handle flattening
    const flattenHelper = (array, depth) => {
        if (depth === 0) {
            return array; // Return array as-is when depth is 0
        }

        let result = [];
        for (const element of array) {
            if (Array.isArray(element)) {
                // Flatten the array recursively if depth allows
                result = result.concat(flattenHelper(element, depth - 1));
            } else {
                // Add non-array elements directly to result
                result.push(element);
            }
        }
        return result;
    };

    return flattenHelper(arr, n);
}

// Test Cases
const arr1 = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
console.log(flatten(arr1, 0)); // [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
console.log(flatten(arr1, 1)); // [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]
console.log(flatten(arr1, 2)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
