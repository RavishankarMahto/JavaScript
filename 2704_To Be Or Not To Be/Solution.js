/**
 * @param {string} val
 * @return {Object}
 */

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

function expect(val) {
    return {
        toBe: function(expected) {
            if (val === expected) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function(expected) {
            if (val !== expected) {
                return true;
            } else {
                throw new Error("Equal");
            }
        }
    };
}

// Example 1
try {
    console.log({ value: expect(5).toBe(5) }); // Output: { value: true }
} catch (error) {
    console.error({ error: error.message });
}

// Example 2
try {
    console.log({ value: expect(5).toBe(null) });
} catch (error) {
    console.error({ error: error.message }); // Output: { error: "Not Equal" }
}

// Example 3
try {
    console.log({ value: expect(5).notToBe(null) }); // Output: { value: true }
} catch (error) {
    console.error({ error: error.message });
}
