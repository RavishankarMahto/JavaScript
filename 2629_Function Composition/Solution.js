/**
 * @param {Function[]} functions
 * @return {Function}
 */
function compose(functions) {
    return function(x) {
        return functions.reduceRight((acc, fn) => fn(acc), x);
    };
}

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
 
// Example 1
const functions1 = [x => x + 1, x => x * x, x => 2 * x];
const x1 = 4;
console.log(compose(functions1)(x1)); // Output: 65

// Example 2
const functions2 = [x => 10 * x, x => 10 * x, x => 10 * x];
const x2 = 1;
console.log(compose(functions2)(x2)); // Output: 1000

// Example 3
const functions3 = [];
const x3 = 42;
console.log(compose(functions3)(x3)); // Output: 42