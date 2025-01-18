/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = new Map();
    let callCount = 0;

    const getKey = (args) => JSON.stringify(args); // Serialize arguments as key

    function memoized(...args) {
        const key = getKey(args);
        if (cache.has(key)) {
            return cache.get(key);
        }

        callCount++;
        const result = fn(...args);
        cache.set(key, result);
        return result;
    }

    memoized.getCallCount = () => callCount;

    return memoized;
}
/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */

// Example usage:

// Example 1: sum
const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);

console.log(memoizedSum(2, 2)); // "call" - returns 4
console.log(memoizedSum(2, 2)); // "call" - returns 4 (cached)
console.log(memoizedSum.getCallCount()); // "getCallCount" - total call count: 1
console.log(memoizedSum(1, 2)); // "call" - returns 3
console.log(memoizedSum.getCallCount()); // "getCallCount" - total call count: 2

// Example 2: factorial
const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
const memoFactorial = memoize(factorial);

console.log(memoFactorial(2)); // "call" - returns 2
console.log(memoFactorial(3)); // "call" - returns 6
console.log(memoFactorial(2)); // "call" - returns 2 (cached)
console.log(memoFactorial.getCallCount()); // "getCallCount" - total call count: 2
console.log(memoFactorial(3)); // "call" - returns 6 (cached)
console.log(memoFactorial.getCallCount()); // "getCallCount" - total call count: 2

// Example 3: fib
const fib = (n) => (n <= 1 ? 1 : fib(n - 1) + fib(n - 2));
const memoFib = memoize(fib);

console.log(memoFib(5)); // "call" - returns 8
console.log(memoFib.getCallCount()); // "getCallCount" - total call count: 1