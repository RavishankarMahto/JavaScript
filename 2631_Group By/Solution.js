/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    return this.reduce((grouped, item) => {
        const key = fn(item); // Get the key using the provided function
        if (!grouped[key]) {
            grouped[key] = []; // Initialize the key with an empty array if it doesn't exist
        }
        grouped[key].push(item); // Push the current item to the appropriate group
        return grouped;
    }, {});
};


/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */