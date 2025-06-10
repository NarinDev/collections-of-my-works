/*
Throttled Task Execution
Create a class TaskThrottler that accepts an array of tasks (functions returning promises) and ensures only a certain number of tasks (e.g., 2 tasks at a time) run concurrently.
 */

class TaskThrottler {
    constructor(tasks) {
        this.tasks = tasks;
    }

    async execute(num = 2) {
        for(let x = 0; x < this.tasks.length; x += num) {
            const temporaryArr = this.tasks.slice( x, x + num)
            await Promise.all(temporaryArr.map( value => value())).then( res => console.log("%c++","background:green", res))
        }
    }
}

new TaskThrottler([
    () => new Promise(resolve => resolve("Promise 1")),
    () => new Promise(resolve => setTimeout( () => resolve("Promise 2"), 1000)),
    () => new Promise(resolve => setTimeout(() => resolve("Promise 3"), 2000)),
    () => new Promise(resolve => setTimeout( () => resolve("Promise 4"), 1500)),
    () => new Promise(resolve => resolve("Promise 5")),
    () => new Promise(resolve => resolve("Promise 6"))]).execute(4)
