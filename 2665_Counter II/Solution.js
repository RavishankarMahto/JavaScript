/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

function createCounter(init) {
    let current = init;

    return {
        increment: function() {
            current += 1;
            return current;
        },
        decrement: function() {
            current -= 1;
            return current;
        },
        reset: function() {
            current = init;
            return current;
        }
    };
}

// Example 1
const counter1 = createCounter(5);
console.log([counter1.increment(), counter1.reset(), counter1.decrement()]); // Output: [6, 5, 4]

// Example 2
const counter2 = createCounter(0);
console.log([
    counter2.increment(),
    counter2.increment(),
    counter2.decrement(),
    counter2.reset(),
    counter2.reset()
]); // Output: [1, 2, 1, 0, 0]
