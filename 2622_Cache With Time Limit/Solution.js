class TimeLimitedCache {
    constructor() {
        this.cache = new Map(); // Store key-value pairs with expiration time
    }

    /**
     * Sets a key-value pair with a time-to-live duration.
     * @param {number} key - The key to set.
     * @param {number} value - The value to associate with the key.
     * @param {number} duration - The duration (ms) until the key expires.
     * @returns {boolean} - True if the key already exists and is not expired, otherwise false.
     */
    set(key, value, duration) {
        const now = Date.now();
        const isExisting = this.cache.has(key) && this.cache.get(key).expiration > now;

        // Overwrite the value and expiration
        this.cache.set(key, {
            value: value,
            expiration: now + duration,
        });

        // Set a timeout to automatically delete the key after the duration
        setTimeout(() => {
            if (this.cache.has(key) && this.cache.get(key).expiration <= Date.now()) {
                this.cache.delete(key);
            }
        }, duration);

        return isExisting;
    }

    /**
     * Gets the value associated with the key if it hasn't expired.
     * @param {number} key - The key to retrieve.
     * @returns {number} - The value if the key exists and is not expired, otherwise -1.
     */
    get(key) {
        const now = Date.now();
        if (this.cache.has(key) && this.cache.get(key).expiration > now) {
            return this.cache.get(key).value;
        }
        return -1;
    }

    /**
     * Counts the number of un-expired keys in the cache.
     * @returns {number} - The count of un-expired keys.
     */
    count() {
        const now = Date.now();
        let count = 0;

        for (const [key, { expiration }] of this.cache) {
            if (expiration > now) {
                count++;
            }
        }

        return count;
    }
}
