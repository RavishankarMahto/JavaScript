/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
/**
 * @param {Object|Array} obj - The input object or array to be compacted
 * @return {Object|Array} - The compacted object or array
 */
function compactObject(obj) {
    if (Array.isArray(obj)) {
        // Filter the array to remove falsy values
        return obj
            .filter(Boolean) // Remove falsy values
            .map(compactObject); // Recursively compact nested objects or arrays
    } else if (obj !== null && typeof obj === "object") {
        // Create a new object with non-falsy values
        const result = {};
        for (const [key, value] of Object.entries(obj)) {
            const compactedValue = compactObject(value); // Recursively compact nested objects or arrays
            if (Boolean(compactedValue)) {
                result[key] = compactedValue; // Only add truthy values
            }
        }
        return result;
    }
    // For non-object and non-array values, return as-is
    return obj;
}

// Test Cases
console.log(compactObject([null, 0, false, 1])); // Output: [1]
console.log(compactObject({ a: null, b: [false, 1] })); // Output: { b: [1] }
console.log(compactObject([null, 0, 5, [0], [false, 16]])); // Output: [5, [], [16]]