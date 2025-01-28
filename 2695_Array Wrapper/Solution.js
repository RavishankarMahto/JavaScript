class ArrayWrapper {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.nums = nums; // Store the array of integers
    }

    /**
     * Adds the values of two ArrayWrapper instances.
     * @param {ArrayWrapper} other
     * @returns {number}
     */
    valueOf() {
        // The `valueOf` method is automatically called during addition
        return this.nums.reduce((sum, num) => sum + num, 0);
    }

    /**
     * Returns the string representation of the array.
     * @returns {string}
     */
    toString() {
        // Convert the array to a comma-separated string within brackets
        return `[${this.nums.join(",")}]`;
    }
}
