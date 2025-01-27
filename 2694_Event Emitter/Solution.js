class EventEmitter {
    constructor() {
        this.events = {}; // Map to store event subscriptions
    }

    /**
     * Subscribes a callback to a specific event.
     * @param {string} eventName - Name of the event.
     * @param {Function} callback - Callback to be invoked on event emit.
     * @return {Object} - An object with an unsubscribe method.
     */
    subscribe(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = []; // Initialize event if not present
        }

        const index = this.events[eventName].length; // Store index for unsubscribe
        this.events[eventName].push(callback);

        return {
            unsubscribe: () => {
                this.events[eventName][index] = null; // Mark the callback as null
            },
        };
    }

    /**
     * Emits an event, invoking all subscribed callbacks.
     * @param {string} eventName - Name of the event.
     * @param {Array} [args=[]] - Arguments to pass to the callbacks.
     * @return {Array} - Results from all callbacks.
     */
    emit(eventName, args = []) {
        if (!this.events[eventName]) {
            return []; // No subscribers for this event
        }

        const results = [];
        for (const callback of this.events[eventName]) {
            if (callback !== null) {
                results.push(callback(...args)); // Call the callback with arguments
            }
        }

        return results;
    }
}
