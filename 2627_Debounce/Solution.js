/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
function debounce(fn, t) {
    let timeout; // Variable to store the current timeout ID

    return function (...args) {
        // Clear the previous timeout if the function is called again within the delay window
        clearTimeout(timeout);

        // Schedule a new execution of the function
        timeout = setTimeout(() => {
            fn(...args); // Call the function with the latest arguments
        }, t);
    };
}


/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */