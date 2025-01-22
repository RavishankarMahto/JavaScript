/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function} cancelFn
 */
function cancellable(fn, args, t) {
    const resultLog = []; // To store logs of execution
    let startTime = Date.now(); // Record the start time

    // Call fn immediately and log the result
    resultLog.push({ time: 0, returned: fn(...args) });

    // Schedule recurring calls to fn
    const intervalId = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        resultLog.push({ time: elapsedTime, returned: fn(...args) });
    }, t);

    // Return the cancel function
    return function cancelFn() {
        clearInterval(intervalId); // Stop further calls
        console.log(resultLog); // Log the results
    };
}

// Example 1
const cancelTimeMs1 = 190;
const cancelFn1 = cancellable((x) => x * 2, [4], 35);
setTimeout(cancelFn1, cancelTimeMs1); // Cancel at 190ms

// Example 2
const cancelTimeMs2 = 165;
const cancelFn2 = cancellable((x1, x2) => x1 * x2, [2, 5], 30);
setTimeout(cancelFn2, cancelTimeMs2); // Cancel at 165ms

// Example 3
const cancelTimeMs3 = 180;
const cancelFn3 = cancellable((x1, x2, x3) => x1 + x2 + x3, [5, 1, 3], 50);
setTimeout(cancelFn3, cancelTimeMs3); // Cancel at 180ms
