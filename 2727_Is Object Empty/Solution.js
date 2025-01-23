/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
function isEmpty(obj) {
    if (Array.isArray(obj)) {
      // Check if the input is an array and if it has no elements
      return obj.length === 0;
    } else if (typeof obj === 'object' && obj !== null) {
      // Check if the input is an object and if it has no key-value pairs
      return Object.keys(obj).length === 0;
    }
    // If obj is not an object or array, throw an error
    throw new Error("Input must be a valid JSON object or array");
  }
  
  // Example inputs and outputs
  console.log(isEmpty({"x": 5, "y": 42})); // Output: false
  console.log(isEmpty({}));               // Output: true
  console.log(isEmpty([null, false, 0])); // Output: false
  console.log(isEmpty([]));               // Output: true
  