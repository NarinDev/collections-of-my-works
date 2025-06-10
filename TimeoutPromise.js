/*
Promise Timeout Wrapper
Create a class named TimeoutPromise that wraps any given promise with a timeout feature. If the original promise doesn’t resolve within the given timeout, reject with a timeout error.
 */

class TimeoutPromise {
    constructor(promise, timeoutMs) {
        this.promise = promise;
        this.timeoutMs = timeoutMs;
    }

    execute() {
        const timeout = new Promise((_, reject) => {
            setTimeout(() => {
                reject(new Error(`Promise timed out after ${this.timeoutMs}ms`));
            }, this.timeoutMs);
        });

        return Promise.race([this.promise, timeout]);
    }
}

// Usage Example:

// Simulate a promise that resolves after 2000ms
const slowPromise = new Promise((resolve) => {
    setTimeout(() => resolve("Resolved after 2 seconds"), 2000);
});

// Wrap it with a timeout of 1000ms (1 second)
const timedPromise = new TimeoutPromise(slowPromise, 1000);

timedPromise.execute()
    .then(result => console.log(result))
    .catch(error => console.error(error.message));
