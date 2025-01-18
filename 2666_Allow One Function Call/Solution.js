/**
 * @param {Function} fn
 * @return {Function}
 */
function once(fn) {
    let called = false;
    let result;

    return function(...args) {
        if (!called) {
            called = true;
            result = fn(...args);
            return result;
        }
        return undefined;
    };
}
/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

// Example 1
const fn1 = (a, b, c) => a + b + c;
const onceFn1 = once(fn1);
console.log(onceFn1(1, 2, 3)); // Output: 6
console.log(onceFn1(2, 3, 6)); // Output: undefined

// Example 2
const fn2 = (a, b, c) => a * b * c;
const onceFn2 = once(fn2);
console.log(onceFn2(5, 7, 4)); // Output: 140
console.log(onceFn2(2, 3, 6)); // Output: undefined
console.log(onceFn2(4, 6, 8)); // Output: undefined
