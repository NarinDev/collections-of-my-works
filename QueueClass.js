/*
Promise-based Queue Class
Create a class named AsyncQueue that manages tasks executed one after another (serially). Methods added to the queue must return promises and must wait for the previous one to finish before starting.
 */

class AsyncQueue {
    queue = [];

    add(method) {
        this.queue.push(method);
        return this;
    }

    async execute() {
        for( const task of this.queue ) {
            const result = await task()
            console.log("%c++","background:green", result)
        }
        this.queue = [];
    }

    addMultiple(...methods) {
        this.queue.push(...methods);
        return this;
    }
}

const examp = new AsyncQueue();
examp
    .add(() => new Promise( (resolve, reject) => setTimeout(() => resolve("1"), 1000)))
    .add(() => new Promise( (resolve, reject) => setTimeout(() => resolve("2"), 2000)))
    .add(() => new Promise( (resolve, reject) => setTimeout(() => resolve("3"), 3000)))
    .add(() => new Promise( (resolve, reject) => setTimeout(() => resolve("4"), 4000)))
    .execute().then();

examp
    .addMultiple(
        () => new Promise( resolve => setTimeout( () => resolve("5"), 1000 )),
        () => new Promise( resolve => setTimeout( () => resolve("6"), 2000 )),
        () => new Promise( resolve => setTimeout( () => resolve("7"), 3000 ))
    ).execute();
