/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
function promiseAll(functions) {
    return new Promise((resolve, reject) => {
        const results = [];
        let completed = 0;
        let hasRejected = false;

        // Handle each function in the array
        functions.forEach((fn, index) => {
            fn()
                .then((result) => {
                    if (hasRejected) return; // Ignore further resolutions after a rejection

                    results[index] = result; // Save the result at the correct index
                    completed++;

                    // If all promises are resolved, resolve the main promise
                    if (completed === functions.length) {
                        resolve(results);
                    }
                })
                .catch((error) => {
                    if (!hasRejected) {
                        hasRejected = true;
                        reject(error); // Reject the main promise with the first error
                    }
                });
        });

        // Handle empty input array
        if (functions.length === 0) {
            resolve(results);
        }
    });
}

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */