/**
 * @param {Function} fn - An asynchronous function
 * @param {number} t - Time limit in milliseconds
 * @return {Function} - A time-limited version of the input function
 */
function timeLimit(fn, t) {
    return async function (...args) {
        // Create a promise that rejects after the time limit
        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => reject("Time Limit Exceeded"), t);
        });

        // Execute the function and race it with the timeout promise
        return Promise.race([fn(...args), timeoutPromise]);
    };
}

// Example 1
const fn1 = async (n) => {
    await new Promise((res) => setTimeout(res, 100));
    return n * n;
};
const inputs1 = [5];
const t1 = 50;

const limited1 = timeLimit(fn1, t1);
const start1 = performance.now();
limited1(...inputs1)
    .then((res) => {
        console.log({
            resolved: res,
            time: Math.floor(performance.now() - start1),
        });
    })
    .catch((err) => {
        console.log({
            rejected: err,
            time: Math.floor(performance.now() - start1),
        });
    });

// Example 2
const fn2 = async (n) => {
    await new Promise((res) => setTimeout(res, 100));
    return n * n;
};
const inputs2 = [5];
const t2 = 150;

const limited2 = timeLimit(fn2, t2);
const start2 = performance.now();
limited2(...inputs2)
    .then((res) => {
        console.log({
            resolved: res,
            time: Math.floor(performance.now() - start2),
        });
    })
    .catch((err) => {
        console.log({
            rejected: err,
            time: Math.floor(performance.now() - start2),
        });
    });

// Example 3
const fn3 = async (a, b) => {
    await new Promise((res) => setTimeout(res, 120));
    return a + b;
};
const inputs3 = [5, 10];
const t3 = 150;

const limited3 = timeLimit(fn3, t3);
const start3 = performance.now();
limited3(...inputs3)
    .then((res) => {
        console.log({
            resolved: res,
            time: Math.floor(performance.now() - start3),
        });
    })
    .catch((err) => {
        console.log({
            rejected: err,
            time: Math.floor(performance.now() - start3),
        });
    });

// Example 4
const fn4 = async () => {
    throw "Error";
};
const inputs4 = [];
const t4 = 1000;

const limited4 = timeLimit(fn4, t4);
const start4 = performance.now();
limited4(...inputs4)
    .then((res) => {
        console.log({
            resolved: res,
            time: Math.floor(performance.now() - start4),
        });
    })
    .catch((err) => {
        console.log({
            rejected: err,
            time: Math.floor(performance.now() - start4),
        });
    });
