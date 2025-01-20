/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
function addTwoPromises(promise1, promise2) { // Renamed from sumPromises
    return Promise.all([promise1, promise2])
        .then(([value1, value2]) => value1 + value2);
}

// Example usage:
addTwoPromises(Promise.resolve(2), Promise.resolve(2))
    .then(console.log); // Output: 4

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */